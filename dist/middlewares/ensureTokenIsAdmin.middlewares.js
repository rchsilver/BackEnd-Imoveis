"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureTokenIsAdminMiddleware = void 0;
const error_1 = require("../error");
const ensureTokenIsAdminMiddleware = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = res.locals.user.admin;
    if (!admin) {
        throw new error_1.AppError("Insufficient permission", 403);
    }
    return next();
});
exports.ensureTokenIsAdminMiddleware = ensureTokenIsAdminMiddleware;
