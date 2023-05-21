import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userSechemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const createSchemaReturn = userSchema.omit({
  name: true,
  email: true,
  deletedAt: true,
  password: true,
  updatedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});

const updateUserSchema = userSchema
  .partial({
    name: true,
    email: true,
    password: true,
  })
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    admin: true,
  });

const listenUserSchema = userSchemaResponse.array();

export {
  userSchema,
  userSechemaRequest,
  userSchemaResponse,
  userLoginSchema,
  createSchemaReturn,
  listenUserSchema,
  updateUserSchema,
};
