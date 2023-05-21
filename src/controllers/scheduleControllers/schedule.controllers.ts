import { Request, Response } from "express";
import { TScheduleResponse } from "../../interfaces/schedule.interface";
import {
  createSchedulesServices,
  listSchedulesOfRealEstateServices,
} from "../../services";

const createScheduleController = async (req: Request, res: Response) => {
  const tokenId: number = res.locals.user.id;
  const scheduleData: TScheduleResponse = req.body;

  await createSchedulesServices(tokenId, scheduleData);

  return res.status(201).json({ message: "Schedule created" });
};

const listSchedulesOfRealEstateController = async (
  req: Request,
  res: Response
) => {
  const id: number = parseInt(req.params.id);
  const list = await listSchedulesOfRealEstateServices(id);

  return res.status(200).json(list);
};

export { createScheduleController, listSchedulesOfRealEstateController };
