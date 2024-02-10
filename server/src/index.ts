import express from "express";
import jwt, { JwtPayload, sign, verify } from 'jsonwebtoken';
import cors from "cors";
import { users } from './db.ts';
import { Request, Response } from 'express';

interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        password: string;
    };
}

const app = express()
const PORT = process.env.PORT || 3001;
const tokenKey = 'some tokenKey';
const refreshTokenKey = 'some refreshTokenKey';
const host = 'http://localhost';
app.locals.title = 'Server project';

const jsonBodyMiddleware = express.json();
app.use(express.json());
app.use(cors());
app.use(jsonBodyMiddleware);

app.get('/', (req, res) => {
    res.send("auth web server");
})

app.use((req: AuthRequest, res: Response, next) => {
    if (req.headers.authorization) {
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            tokenKey,
            (err, payload: any) => {
                if (err) return res.status(401).json({ message: 'Unauthorized' });
                else if (payload) {
                    for (let user of users) {
                        if (user.id === payload.id) {
                            req.user = user;
                            next();
                        }
                    }

                    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
                }
            }
        );
    }

    next();
});

app.post('/api/auth', (req, res: Response) => {
    for (let user of users) {
        if (
            req.body.login === user.email &&
            req.body.password === user.password
        ) {
            return res.status(200).json({
                id: user.id,
                login: user.email,
                token: jwt.sign({ id: user.id }, tokenKey),
            });
        }
    }

    return res
        .status(404)
        .json({ message: 'User not found' });
});

function verifyRefreshToken(refreshToken: string): JwtPayload | null {
    try {
        const decoded = verify(refreshToken, refreshTokenKey) as JwtPayload;
        return decoded;
    } catch (error) {
        return null;
    }
}

app.post('/api/auth/refresh', (req: AuthRequest, res: Response) => {
    const refreshToken: string = req.body.refreshToken;

    const decodedToken: JwtPayload | null = verifyRefreshToken(refreshToken);

    if (decodedToken) {
        const newAccessToken: string = sign({ id: decodedToken.id }, tokenKey);
        const newRefreshToken: string = sign({ id: decodedToken.id }, refreshTokenKey);

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        });
    } else {
        res.status(401).json({ message: 'Invalid refreshToken' });
    }
});

app.get('/user', (req: AuthRequest, res: Response) => {
    if (req.user) return res.status(200).json(req.user);
    else
        return res
            .status(401)
            .json({ message: 'Not authorized' });
});

app.listen(PORT, () => {
    console.log(`Server running at ${host}:${PORT}`);
    console.log(`My app: ${app.locals.title}`);
})
