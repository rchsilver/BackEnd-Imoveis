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
exports.createSchedulesServices = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const error_1 = require("../../error");
const createSchedulesServices = (id, scheduleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, hour, realEstateId } = scheduleData;
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
    const realEstateRepository = data_source_1.AppDataSource.getRepository(entities_1.RealEstate);
    const scheduleRepository = data_source_1.AppDataSource.getRepository(entities_1.Schedule);
    const getUser = yield userRepository.findOneBy({ id });
    const getRealEstate = yield realEstateRepository.findOneBy({
        id: realEstateId,
    });
    if (!getRealEstate)
        throw new error_1.AppError("RealEstate not found", 404);
    const getSchedule = yield scheduleRepository
        .createQueryBuilder("sch")
        .where("sch.realEstateId = :realEstateId", {
        realEstateId: realEstateId,
    })
        .andWhere("sch.date = :date", { date: date })
        .andWhere("sch.hour = :hour", { hour: hour })
        .getOne();
    if (getSchedule)
        throw new error_1.AppError("Schedule to this real estate at this date and time already exists", 409);
    const checkSchedule = yield scheduleRepository.findOneBy({ date, hour });
    if (checkSchedule)
        throw new error_1.AppError("User schedule to this real estate at this date and time already exists", 409);
    if (hour < "08:00" || hour > "18:00")
        throw new error_1.AppError("Invalid hour, available times are 8AM to 18PM");
    const getDay = new Date(date).getDay();
    if (getDay === 0 || getDay === 6)
        throw new error_1.AppError("Invalid date, work days are monday to friday", 400);
    const createSchedule = scheduleRepository.create(Object.assign(Object.assign({}, scheduleData), { realEstate: getRealEstate, user: getUser }));
    yield scheduleRepository.save(createSchedule);
});
exports.createSchedulesServices = createSchedulesServices;
