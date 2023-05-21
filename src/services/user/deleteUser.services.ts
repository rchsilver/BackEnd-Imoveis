import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

const deleteUserServices = async (id: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const getUser = await userRepository.findOneBy({ id });

  await userRepository.softRemove(getUser!);
};

export { deleteUserServices };
