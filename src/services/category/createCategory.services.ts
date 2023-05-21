import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  TCategory,
  TCategoryRquest,
} from "../../interfaces/category.interface";

const createCategoryService = async (
  categoryData: TCategoryRquest
): Promise<TCategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category: Category = categoryRepository.create({ ...categoryData });
  await categoryRepository.save(category);

  return category;
};

export { createCategoryService };
