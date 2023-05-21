import { Router } from "express";
import { loginUserController } from "../controllers/userControllers/user.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { userLoginSchema } from "../schemas/user.schema";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(userLoginSchema),
  loginUserController
);

export { loginRoutes };
