import z from "zod";
import {
  categorySchema,
  categorySchemaRequest,
  listCategoiesSchema,
} from "../schemas/category.schema";

type TCategory = z.infer<typeof categorySchema>;

type TCategoryRquest = z.infer<typeof categorySchemaRequest>;

type TListCategories = z.infer<typeof listCategoiesSchema>;

export { TCategory, TCategoryRquest, TListCategories };
