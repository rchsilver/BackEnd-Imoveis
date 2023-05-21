import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TListenUsers } from "../../interfaces/user.interface";
import { listenUserSchema } from "../../schemas/user.schema";

const listenUsersServices = async (): Promise<TListenUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const getUsers: User[] = await userRepository.find();

  const listenUsers: TListenUsers = listenUserSchema.parse(getUsers);

  return listenUsers;
};
export { listenUsersServices };
