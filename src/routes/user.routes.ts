import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listenUsersController,
  updateUsersController,
} from "../controllers";
import {
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserPermissionMiddlewares,
  enusereIdIsValidMiddlewares,
} from "../middlewares";

import { updateUserSchema, userSechemaRequest } from "../schemas/user.schema";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSechemaRequest),
  ensureEmailExistsMiddleware,
  createUserController
);

usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  listenUsersController
);

usersRoutes.delete(
  "/:id",
  enusereIdIsValidMiddlewares,
  ensureTokenIsValidMiddleware,
  ensureUserPermissionMiddlewares,
  deleteUserController
);

usersRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateUserSchema),
  enusereIdIsValidMiddlewares,
  ensureTokenIsValidMiddleware,
  ensureUserPermissionMiddlewares,
  updateUsersController
);

export { usersRoutes };
