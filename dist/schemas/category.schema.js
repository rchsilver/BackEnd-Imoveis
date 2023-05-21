"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategoiesSchema = exports.categorySchemaRequest = exports.categorySchema = void 0;
const zod_1 = require("zod");
const categorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(45),
});
exports.categorySchema = categorySchema;
const categorySchemaRequest = categorySchema.omit({ id: true });
exports.categorySchemaRequest = categorySchemaRequest;
const listCategoiesSchema = categorySchema.array();
exports.listCategoiesSchema = listCategoiesSchema;
