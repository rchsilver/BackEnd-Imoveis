import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error";

const listRealEstateByCategoryServices = async (
  id: number
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const getCategory = await categoryRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
    },
  });

  if (!getCategory) throw new AppError("Category not found", 404);

  return getCategory;
};

export { listRealEstateByCategoryServices };
