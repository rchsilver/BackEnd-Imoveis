"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const category_schema_1 = require("../schemas/category.schema");
const categoryRoute = (0, express_1.Router)();
exports.categoryRoute = categoryRoute;
categoryRoute.post("", (0, middlewares_1.ensureDataIsValidMiddleware)(category_schema_1.categorySchemaRequest), middlewares_1.ensureTokenIsValidMiddleware, middlewares_1.ensureTokenIsAdminMiddleware, middlewares_1.ensureCategoryExistsMiddleware, controllers_1.createCategoryController);
categoryRoute.get("", controllers_1.listenCategoriesController);
categoryRoute.get("/:id/realEstate", controllers_1.listRealEstateByCategoriesController);
