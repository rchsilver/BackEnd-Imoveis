import z from "zod";
import {
  listRealEstateSchema,
  realEstateSchema,
  realEstateSchemaRequest,
} from "../schemas/realEstate.schema";

type TRealEstate = z.infer<typeof realEstateSchema>;

type TRealEstateResponse = z.infer<typeof realEstateSchemaRequest>;

type TListRealEstate = z.infer<typeof listRealEstateSchema>;

export { TRealEstate, TRealEstateResponse, TListRealEstate };
