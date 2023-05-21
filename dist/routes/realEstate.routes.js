"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realEstateRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const realEstate_schema_1 = require("../schemas/realEstate.schema");
const realEstateRoute = (0, express_1.Router)();
exports.realEstateRoute = realEstateRoute;
realEstateRoute.post("", (0, middlewares_1.ensureDataIsValidMiddleware)(realEstate_schema_1.realEstateSchemaRequest), middlewares_1.ensureTokenIsValidMiddleware, middlewares_1.ensureTokenIsAdminMiddleware, controllers_1.createRealEstateController);
realEstateRoute.get("", controllers_1.listenRealEstateController);
