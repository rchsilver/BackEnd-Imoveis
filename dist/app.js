"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const error_1 = require("./error");
const user_routes_1 = require("./routes/user.routes");
const login_routes_1 = require("./routes/login.routes");
const category_routes_1 = require("./routes/category.routes");
const realEstate_routes_1 = require("./routes/realEstate.routes");
const schedules_routes_1 = require("./routes/schedules.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", user_routes_1.usersRoutes);
app.use("/login", login_routes_1.loginRoutes);
app.use("/categories", category_routes_1.categoryRoute);
app.use("/realEstate", realEstate_routes_1.realEstateRoute);
app.use("/schedules", schedules_routes_1.scheduleRoute);
app.use(error_1.handleErros);
exports.default = app;
