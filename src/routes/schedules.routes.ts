import { Router } from "express";
import {
  createScheduleController,
  listSchedulesOfRealEstateController,
} from "../controllers";
import {
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
} from "../middlewares";
import { scheduleSchemaRequest } from "../schemas/schedule.schema";

const scheduleRoute: Router = Router();

scheduleRoute.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(scheduleSchemaRequest),
  createScheduleController
);

scheduleRoute.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  listSchedulesOfRealEstateController
);

export { scheduleRoute };
