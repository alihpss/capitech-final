"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const Authorization_1 = require("../middlewares/Authorization");
const routes = (0, express_1.Router)();
const userController = new UserController_1.UserController();
routes.post('/login', userController.auth);
routes.post('/cadastro', userController.register);
routes.delete('/user/:id', Authorization_1.ensureAuthenticate, userController.delete);
routes.put('/user/:id', Authorization_1.ensureAuthenticate, userController.update);
exports.default = routes;
//# sourceMappingURL=user.routes.js.map