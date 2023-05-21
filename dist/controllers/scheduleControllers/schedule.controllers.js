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
exports.listSchedulesOfRealEstateController = exports.createScheduleController = void 0;
const services_1 = require("../../services");
const createScheduleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenId = res.locals.user.id;
    const scheduleData = req.body;
    yield (0, services_1.createSchedulesServices)(tokenId, scheduleData);
    return res.status(201).json({ message: "Schedule created" });
});
exports.createScheduleController = createScheduleController;
const listSchedulesOfRealEstateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const list = yield (0, services_1.listSchedulesOfRealEstateServices)(id);
    return res.status(200).json(list);
});
exports.listSchedulesOfRealEstateController = listSchedulesOfRealEstateController;
