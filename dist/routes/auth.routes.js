"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controller/AuthController");
const routes = (0, express_1.Router)();
const authController = new AuthController_1.AuthController();
routes.post('/validateToken', authController.validateToken);
exports.default = routes;
//# sourceMappingURL=auth.routes.js.map