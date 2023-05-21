import { union, z } from "zod";
import { addressSchema, addressSchemaRequest } from "./address.schema";
import { categorySchema } from "./category.schema";

const realEstateSchema = z.object({
  id: z.number(),
  value: union([
    z
      .string()
      .min(0)
      .transform((value) => parseFloat(value).toFixed(2)),
    z
      .number()
      .min(0)
      .transform((value) => parseFloat(value.toFixed(2))),
  ]),
  size: z.number().int().positive(),
  address: addressSchema,
  category: categorySchema,
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateSchemaRequest = realEstateSchema
  .omit({
    id: true,
    address: true,
    category: true,
    createdAt: true,
    updatedAt: true,
  })
  .extend({
    address: addressSchemaRequest,
    categoryId: z.number(),
  });

const listRealEstateSchema = realEstateSchema.array();

export { realEstateSchema, realEstateSchemaRequest, listRealEstateSchema };
