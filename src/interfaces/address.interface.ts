import { z } from "zod";
import { addressSchema, addressSchemaRequest } from "../schemas/address.schema";

type TAddressSchema = z.infer<typeof addressSchema>;

type TAddressSchemaRequest = z.infer<typeof addressSchemaRequest>;

export { TAddressSchemaRequest, TAddressSchema };
