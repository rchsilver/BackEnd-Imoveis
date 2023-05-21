import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";

const enusereIdIsValidMiddlewares = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const id = parseInt(req.params.id);
  if (!id) throw new AppError("User not found", 404);

  const getUser = await userRepository.findOneBy({ id });
  if (!getUser) throw new AppError("User not found", 404);

  return next();
};

export { enusereIdIsValidMiddlewares };
