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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserServices = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const error_1 = require("../../error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUserServices = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
    const user = yield userRepository.findOneBy({
        email: userData.email,
    });
    if (!user || user.deletedAt)
        throw new error_1.AppError("Invalid credentials", 401);
    const comparePassword = yield (0, bcryptjs_1.compare)(userData.password, user.password);
    if (!comparePassword)
        throw new error_1.AppError("Invalid credentials", 401);
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
        admin: user.admin,
    }, process.env.SECRET_KEY.toString(), {
        expiresIn: "24h",
        subject: user.id.toString(),
    });
    return token;
});
exports.loginUserServices = loginUserServices;
