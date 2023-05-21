import { z } from "zod";
import {
  createSchemaReturn,
  listenUserSchema,
  updateUserSchema,
  userLoginSchema,
  userSchema,
  userSchemaResponse,
  userSechemaRequest,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSechemaRequest>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TCreateReturn = z.infer<typeof createSchemaReturn>;

type TUserLogin = z.infer<typeof userLoginSchema>;

type TListenUsers = z.infer<typeof listenUserSchema>;

type TUpdateUser = z.infer<typeof updateUserSchema>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TCreateReturn,
  TUserLogin,
  TListenUsers,
  TUpdateUser,
};
