import { Router } from "express";
import {
  createRealEstateController,
  listenRealEstateController,
} from "../controllers";

import {
  ensureDataIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureTokenIsValidMiddleware,
} from "../middlewares";
import { realEstateSchemaRequest } from "../schemas/realEstate.schema";

const realEstateRoute: Router = Router();

realEstateRoute.post(
  "",
  ensureDataIsValidMiddleware(realEstateSchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  createRealEstateController
);

realEstateRoute.get("", listenRealEstateController);

export { realEstateRoute };
