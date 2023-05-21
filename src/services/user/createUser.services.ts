import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const createUserServices = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User = userRepository.create({
    ...userData,
  });

  await userRepository.save(user);

  const dataIsValid = userSchemaResponse.parse(user);

  return dataIsValid;
};

export { createUserServices };
