import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import {
  TRealEstate,
  TRealEstateResponse,
} from "../../interfaces/realEstate.interface";
import { addressSchemaRequest } from "../../schemas/address.schema";
import { realEstateSchema } from "../../schemas/realEstate.schema";

const createRealEstateService = async (
  realEstateData: TRealEstateResponse
): Promise<TRealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const addressValidated = addressSchemaRequest.parse(realEstateData.address);

  const { state, street, city, number, zipCode } = realEstateData.address;
  if (number) {
    const getAddress = await addressRepository.findOneBy({
      state,
      street,
      city,
      number,
      zipCode,
    });
    if (getAddress) throw new AppError("Address already exists", 409);
  }

  const address: Address = addressRepository.create(addressValidated);

  await addressRepository.save(address);
  const id = realEstateData.categoryId;
  const category = await categoryRepository.findOneBy({ id });

  if (!category) throw new AppError("Category not found", 404);

  const createRealEstate = realEstateRepository.create({
    ...realEstateData,
    address,
    category,
  });
  await realEstateRepository.save(createRealEstate);

  const realEstateValidated = realEstateSchema.parse(createRealEstate);

  return realEstateValidated;
};

export { createRealEstateService };
