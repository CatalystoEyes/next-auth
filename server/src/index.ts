import express from "express"
import cors from "cors";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { users } from './db.ts';
import { Request } from 'express';

interface AuthRequest extends Request {
    user?: {
        id: number;
        login: string;
        password: string;
    };
}

const app = express()
const PORT = process.env.PORT || 3000;
const tokenKey = '0ocq-5la9-pp91-9h4z';
const host = 'http://localhost';
app.locals.title = 'Server project'

const jsonBodyMiddleware = express.json()
app.use(cors())
app.use(jsonBodyMiddleware)

app.get('/', (req, res) => {
    res.send("auth web server")
})

app.use(express.json());
app.use((req: AuthRequest, res, next) => {
    if (req.headers.authorization) {
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            tokenKey,
            (err, payload: any) => {
                if (err) next();
                else if (payload) {
                    for (let user of users) {
                        if (user.id === payload.id) {
                            req.user = user;
                            next();
                        }
                    }

                    if (!req.user) next();
                }
            }
        );
    }

    next();
});

app.post('/api/auth', (req, res) => {
    for (let user of users) {
        if (
            req.body.login === user.login &&
            req.body.password === user.password
        ) {
            return res.status(200).json({
                id: user.id,
                login: user.login,
                token: jwt.sign({ id: user.id }, tokenKey),
            });
        }
    }

    return res
        .status(404)
        .json({ message: 'User not found' });
});

app.get('/user', (req: AuthRequest, res) => {
    if (req.user) return res.status(200).json(req.user);
    else
        return res
            .status(401)
            .json({ message: 'Not authorized' });
});

app.listen(PORT, () => {
    console.log(`Server running at ${host}:${PORT}`)
    console.log(`My app: ${app.locals.title}`)
})
// --------------------------------------------------------------------------------------------------------
// CRUD operation
// app.get('/users', (req, res) => {
//     let foundUsers = db.users
//     if (req.query.login) {
//         foundUsers = foundUsers.filter(u => u.login.indexOf(req.query.login as string) > -1)
//     }
//     res.json(foundUsers)
// })

// app.get('/users/:id', (req, res) => {
//     const foundUserByID = db.users.find(u => u.id === +req.params.id)
//     if (!foundUserByID) {
//         res.sendStatus(404)
//         return;
//     }
//     res.json(foundUserByID)
// })

// app.post('/users', (req, res) => {
//     if (!req.body.login) {
//         res.sendStatus(400)
//         return;
//     }
//     const createdUser = {
//         id: +(new Date()),
//         login: req.body.login,
//         password: 'new-password'
//     }
//     db.users.push(createdUser)
//     res.status(201).json(createdUser)
// })

// app.delete('/users/:id', (req, res) => {
//     db.users = db.users.filter(u => u.id !== +req.params.id)

//     res.sendStatus(204)
// })

// app.put('/users/:id', (req, res) => {
//     if (!req.body.login) {
//         res.sendStatus(400)
//         return;
//     }
//     const foundUserByID = db.users.find(u => u.id === +req.params.id)
//     if (!foundUserByID) {
//         res.sendStatus(404)
//         return;
//     }
//     foundUserByID.login = req.body.login
//     res.sendStatus(204)
// })
