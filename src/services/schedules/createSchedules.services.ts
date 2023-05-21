import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User, RealEstate, Schedule } from "../../entities";
import { AppError } from "../../error";
import { TScheduleResponse } from "../../interfaces/schedule.interface";

const createSchedulesServices = async (
  id: number,
  scheduleData: TScheduleResponse
): Promise<void> => {
  const { date, hour, realEstateId } = scheduleData;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const getUser = await userRepository.findOneBy({ id });

  const getRealEstate = await realEstateRepository.findOneBy({
    id: realEstateId,
  });

  if (!getRealEstate) throw new AppError("RealEstate not found", 404);

  const getSchedule = await scheduleRepository
    .createQueryBuilder("sch")
    .where("sch.realEstateId = :realEstateId", {
      realEstateId: realEstateId,
    })
    .andWhere("sch.date = :date", { date: date })
    .andWhere("sch.hour = :hour", { hour: hour })
    .getOne();
  if (getSchedule)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  const checkSchedule = await scheduleRepository.findOneBy({ date, hour });
  if (checkSchedule)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  if (hour < "08:00" || hour > "18:00")
    throw new AppError("Invalid hour, available times are 8AM to 18PM");

  const getDay = new Date(date).getDay();

  if (getDay === 0 || getDay === 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);

  const createSchedule: Schedule = scheduleRepository.create({
    ...scheduleData,
    realEstate: getRealEstate,
    user: getUser!,
  });

  await scheduleRepository.save(createSchedule);
};

export { createSchedulesServices };
