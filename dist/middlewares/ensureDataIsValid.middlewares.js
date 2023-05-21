"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDataIsValidMiddleware = void 0;
const ensureDataIsValidMiddleware = (schema) => (req, _res, next) => {
    const validateData = schema.parse(req.body);
    req.body = validateData;
    return next();
};
exports.ensureDataIsValidMiddleware = ensureDataIsValidMiddleware;
