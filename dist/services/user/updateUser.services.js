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
exports.updateUserServices = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const user_schema_1 = require("../../schemas/user.schema");
const updateUserServices = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
    const getUser = yield userRepository.findOneBy({ id });
    const patchUser = userRepository.create(Object.assign(Object.assign({}, getUser), userData));
    yield userRepository.save(patchUser);
    return user_schema_1.userSchemaResponse.parse(patchUser);
});
exports.updateUserServices = updateUserServices;
