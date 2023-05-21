import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
const ensureDataIsValidMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const validateData = schema.parse(req.body);
    req.body = validateData;

    return next();
  };

export { ensureDataIsValidMiddleware };
