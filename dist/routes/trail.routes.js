"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TrailController_1 = require("../controller/TrailController");
const Authorization_1 = require("../middlewares/Authorization");
const routes = (0, express_1.Router)();
const trailController = new TrailController_1.TrailController();
routes.get('/trilhas', trailController.getAll);
routes.get('/trilhas/:id', trailController.getOne);
routes.post('/trilhas', Authorization_1.ensureAuthenticate, trailController.create);
routes.put('/trilhas/:id', Authorization_1.ensureAuthenticate, trailController.update);
routes.delete('/trilhas/:id', Authorization_1.ensureAuthenticate, trailController.delete);
exports.default = routes;
//# sourceMappingURL=trail.routes.js.map