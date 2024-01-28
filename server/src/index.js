"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var jsonwebtoken_1 = require("jsonwebtoken");
var db_ts_1 = require("./db.ts");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
var tokenKey = '0ocq-5la9-pp91-9h4z';
var host = 'http://localhost';
app.locals.title = 'Server project';
var jsonBodyMiddleware = express_1.default.json();
app.use((0, cors_1.default)());
app.use(jsonBodyMiddleware);
app.get('/', function (req, res) {
    res.send("auth web server");
});
app.use(express_1.default.json());
app.use(function (req, res, next) {
    if (req.headers.authorization) {
        jsonwebtoken_1.default.verify(req.headers.authorization.split(' ')[1], tokenKey, function (err, payload) {
            if (err)
                next();
            else if (payload) {
                for (var _i = 0, users_1 = db_ts_1.users; _i < users_1.length; _i++) {
                    var user = users_1[_i];
                    if (user.id === payload.id) {
                        req.user = user;
                        next();
                    }
                }
                if (!req.user)
                    next();
            }
        });
    }
    next();
});
app.post('/api/auth', function (req, res) {
    for (var _i = 0, users_2 = db_ts_1.users; _i < users_2.length; _i++) {
        var user = users_2[_i];
        if (req.body.login === user.login &&
            req.body.password === user.password) {
            return res.status(200).json({
                id: user.id,
                login: user.login,
                token: jsonwebtoken_1.default.sign({ id: user.id }, tokenKey),
            });
        }
    }
    return res
        .status(404)
        .json({ message: 'User not found' });
});
app.get('/user', function (req, res) {
    if (req.user)
        return res.status(200).json(req.user);
    else
        return res
            .status(401)
            .json({ message: 'Not authorized' });
});
app.listen(PORT, function () {
    console.log("Server running at ".concat(host, ":").concat(PORT));
    console.log("My app: ".concat(app.locals.title));
});
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
