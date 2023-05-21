import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../error";

const listSchedulesOfRealEstateServices = async (id: number) => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const queryGetList = await realEstateRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });

  if (!queryGetList) throw new AppError("RealEstate not found", 404);

  return queryGetList;
};

export { listSchedulesOfRealEstateServices };
