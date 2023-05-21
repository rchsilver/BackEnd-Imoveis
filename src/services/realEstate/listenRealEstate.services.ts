import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

const listenRealEstateService = async (): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const listenRealEstate: RealEstate[] = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return listenRealEstate;
};

export { listenRealEstateService };
