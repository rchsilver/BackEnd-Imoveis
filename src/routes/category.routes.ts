import { Router } from "express";
import {
  createCategoryController,
  listenCategoriesController,
  listRealEstateByCategoriesController,
} from "../controllers";
import {
  ensureCategoryExistsMiddleware,
  ensureDataIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureTokenIsValidMiddleware,
} from "../middlewares";
import { categorySchemaRequest } from "../schemas/category.schema";

const categoryRoute: Router = Router();

categoryRoute.post(
  "",
  ensureDataIsValidMiddleware(categorySchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureCategoryExistsMiddleware,
  createCategoryController
);

categoryRoute.get("", listenCategoriesController);

categoryRoute.get("/:id/realEstate", listRealEstateByCategoriesController);

export { categoryRoute };
