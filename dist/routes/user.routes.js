"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const Authorization_1 = require("../middlewares/Authorization");
const Validations_1 = __importDefault(require("../middlewares/Validations"));
const userSchema_1 = require("../validations/userSchema");
const routes = (0, express_1.Router)();
const userController = new UserController_1.UserController();
const validation = new Validations_1.default();
routes.post('/login', userController.auth);
routes.post('/cadastro', validation.validate(userSchema_1.UserSchema.create), userController.register);
routes.delete('/user/:id', Authorization_1.ensureAuthenticate, userController.delete);
routes.put('/user/:id', validation.validate(userSchema_1.UserSchema.update), Authorization_1.ensureAuthenticate, userController.update);
exports.default = routes;
//# sourceMappingURL=user.routes.js.map