import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const updateUserServices = async (
  id: number,
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const getUser = await userRepository.findOneBy({ id });

  const patchUser = userRepository.create({ ...getUser, ...userData });

  await userRepository.save(patchUser);

  return userSchemaResponse.parse(patchUser);
};

export { updateUserServices };
