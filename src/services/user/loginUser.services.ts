import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { TUserLogin } from "../../interfaces/user.interface";
import jwt from "jsonwebtoken";

const loginUserServices = async (userData: TUserLogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: userData.email,
  });

  if (!user || user.deletedAt) throw new AppError("Invalid credentials", 401);

  const comparePassword = await compare(userData.password, user.password);

  if (!comparePassword) throw new AppError("Invalid credentials", 401);

  const token: string = jwt.sign(
    {
      id: user.id,
      admin: user.admin,
    },
    process.env.SECRET_KEY!.toString(),
    {
      expiresIn: "24h",
      subject: user.id.toString(),
    }
  );

  return token;
};

export { loginUserServices };
