import { Request, Response } from "express";
import {
  createRealEstateService,
  listenRealEstateService,
} from "../../services";

const createRealEstateController = async (req: Request, res: Response) => {
  const realEstateData = req.body;
  const newRealEstate = await createRealEstateService(realEstateData);

  return res.status(201).json(newRealEstate);
};

const listenRealEstateController = async (_req: Request, res: Response) => {
  const listRealEstate = await listenRealEstateService();

  return res.status(200).json(listRealEstate);
};

export { createRealEstateController, listenRealEstateController };
