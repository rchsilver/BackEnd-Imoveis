"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRealEstateSchema = exports.realEstateSchemaRequest = exports.realEstateSchema = void 0;
const zod_1 = require("zod");
const address_schema_1 = require("./address.schema");
const category_schema_1 = require("./category.schema");
const realEstateSchema = zod_1.z.object({
    id: zod_1.z.number(),
    value: (0, zod_1.union)([
        zod_1.z
            .string()
            .min(0)
            .transform((value) => parseFloat(value).toFixed(2)),
        zod_1.z
            .number()
            .min(0)
            .transform((value) => parseFloat(value.toFixed(2))),
    ]),
    size: zod_1.z.number().int().positive(),
    address: address_schema_1.addressSchema,
    category: category_schema_1.categorySchema,
    sold: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.realEstateSchema = realEstateSchema;
const realEstateSchemaRequest = realEstateSchema
    .omit({
    id: true,
    address: true,
    category: true,
    createdAt: true,
    updatedAt: true,
})
    .extend({
    address: address_schema_1.addressSchemaRequest,
    categoryId: zod_1.z.number(),
});
exports.realEstateSchemaRequest = realEstateSchemaRequest;
const listRealEstateSchema = realEstateSchema.array();
exports.listRealEstateSchema = listRealEstateSchema;
