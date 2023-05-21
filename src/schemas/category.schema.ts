import { z } from "zod";

const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});

const categorySchemaRequest = categorySchema.omit({ id: true });

const listCategoiesSchema = categorySchema.array();

export { categorySchema, categorySchemaRequest, listCategoiesSchema };
