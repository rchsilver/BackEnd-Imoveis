import { Request, Response } from "express";
import { TCategoryRquest } from "../../interfaces/category.interface";
import {
  createCategoryService,
  listenCategoriesServices,
  listRealEstateByCategoryServices,
} from "../../services";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: TCategoryRquest = req.body;
  const newCategory = await createCategoryService(categoryData);

  return res.status(201).json(newCategory);
};

const listenCategoriesController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const listCategories = await listenCategoriesServices();

  return res.status(200).json(listCategories);
};

const listRealEstateByCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const listRealEstateByCategory = await listRealEstateByCategoryServices(id);

  return res.status(200).json(listRealEstateByCategory);
};

export {
  createCategoryController,
  listenCategoriesController,
  listRealEstateByCategoriesController,
};
