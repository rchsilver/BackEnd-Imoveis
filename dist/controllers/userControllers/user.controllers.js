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
exports.updateUsersController = exports.deleteUserController = exports.listenUsersController = exports.loginUserController = exports.createUserController = void 0;
const services_1 = require("../../services");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const newUser = yield (0, services_1.createUserServices)(userData);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const token = yield (0, services_1.loginUserServices)(userData);
    return res.status(200).json({ token });
});
exports.loginUserController = loginUserController;
const listenUsersController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listenUsers = yield (0, services_1.listenUsersServices)();
    return res.status(200).json(listenUsers);
});
exports.listenUsersController = listenUsersController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield (0, services_1.deleteUserServices)(id);
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
const updateUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const userData = req.body;
    const updateUsers = yield (0, services_1.updateUserServices)(id, userData);
    return res.status(200).json(updateUsers);
});
exports.updateUsersController = updateUsersController;
