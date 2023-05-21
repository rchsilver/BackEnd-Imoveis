import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";

const ensureEmailExistsMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  if (email) {
    const verifyEmail = await userRepository.findOneBy({ email });
    if (verifyEmail) {
      throw new AppError("Email already exists", 409);
    }
  }
  return next();
};

export { ensureEmailExistsMiddleware };
