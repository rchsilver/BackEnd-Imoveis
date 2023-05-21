import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { TListCategories } from "../../interfaces/category.interface";
import { listCategoiesSchema } from "../../schemas/category.schema";

const listenCategoriesServices = async (): Promise<TListCategories> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const getCategories: Category[] = await categoryRepository.find();

  const categoiesValidated = listCategoiesSchema.parse(getCategories);

  return categoiesValidated;
};

export { listenCategoriesServices };
