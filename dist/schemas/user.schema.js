"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.listenUserSchema = exports.createSchemaReturn = exports.userLoginSchema = exports.userSchemaResponse = exports.userSechemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(45),
    email: zod_1.z.string().email().max(45),
    password: zod_1.z.string().max(120),
    admin: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    deletedAt: zod_1.z.string().nullish(),
});
exports.userSchema = userSchema;
const userSechemaRequest = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});
exports.userSechemaRequest = userSechemaRequest;
const createSchemaReturn = userSchema.omit({
    name: true,
    email: true,
    deletedAt: true,
    password: true,
    updatedAt: true,
});
exports.createSchemaReturn = createSchemaReturn;
const userSchemaResponse = userSchema.omit({
    password: true,
});
exports.userSchemaResponse = userSchemaResponse;
const userLoginSchema = userSchema.pick({
    email: true,
    password: true,
});
exports.userLoginSchema = userLoginSchema;
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
exports.updateUserSchema = updateUserSchema;
const listenUserSchema = userSchemaResponse.array();
exports.listenUserSchema = listenUserSchema;
