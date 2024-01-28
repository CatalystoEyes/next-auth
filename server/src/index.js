"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.locals.title = 'Server project';
var jsonBodyMiddleware = express_1.default.json();
app.use(jsonBodyMiddleware);
var db = {
    users: [
        { id: 1, title: 'user-1' },
        { id: 2, title: 'user-2' },
        { id: 3, title: 'user-3' },
        { id: 4, title: 'user-4' },
    ]
};
app.get('/users', function (req, res) {
    var foundUsers = db.users;
    if (req.query.title) {
        foundUsers = foundUsers.filter(function (u) { return u.title.indexOf(req.query.title) > -1; });
    }
    res.json(foundUsers);
});
app.get('/users/:id', function (req, res) {
    var foundUserByID = [
        { id: 1, title: 'user-1' },
        { id: 2, title: 'user-2' },
        { id: 3, title: 'user-3' },
        { id: 4, title: 'user-4' },
    ].find(function (u) { return u.id === +req.params.id; });
    if (!foundUserByID) {
        res.sendStatus(404);
        return;
    }
    res.json(foundUserByID);
});
app.post('/users', function (req, res) {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }
    var createdUser = {
        id: +(new Date()),
        title: req.body.title
    };
    db.users.push(createdUser);
    res.status(201).json(createdUser);
});
app.delete('/users/:id', function (req, res) {
    db.users = db.users.filter(function (u) { return u.id !== +req.params.id; });
    res.sendStatus(204);
});
app.put('/users/:id', function (req, res) {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }
    var foundUserByID = db.users.find(function (u) { return u.id === +req.params.id; });
    if (!foundUserByID) {
        res.sendStatus(404);
        return;
    }
    foundUserByID.title = req.body.title;
    res.sendStatus(204);
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
    console.log("My app: ".concat(app.locals.title));
});
