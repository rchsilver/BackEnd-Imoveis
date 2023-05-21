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
exports.listenRealEstateController = exports.createRealEstateController = void 0;
const services_1 = require("../../services");
const createRealEstateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstateData = req.body;
    const newRealEstate = yield (0, services_1.createRealEstateService)(realEstateData);
    return res.status(201).json(newRealEstate);
});
exports.createRealEstateController = createRealEstateController;
const listenRealEstateController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listRealEstate = yield (0, services_1.listenRealEstateService)();
    return res.status(200).json(listRealEstate);
});
exports.listenRealEstateController = listenRealEstateController;
