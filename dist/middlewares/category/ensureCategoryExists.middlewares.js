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
exports.ensureCategoryExistsMiddleware = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const error_1 = require("../../error");
const ensureCategoryExistsMiddleware = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.Category);
    if (name) {
        const verifyName = yield userRepository.findOneBy({ name });
        if (verifyName)
            throw new error_1.AppError("Category already exists", 409);
    }
    return next();
});
exports.ensureCategoryExistsMiddleware = ensureCategoryExistsMiddleware;
