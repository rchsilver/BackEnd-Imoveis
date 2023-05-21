import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error";

const ensureCategoryExistsMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = req.body.name;
  const userRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  if (name) {
    const verifyName = await userRepository.findOneBy({ name });
    if (verifyName) throw new AppError("Category already exists", 409);
  }

  return next();
};

export { ensureCategoryExistsMiddleware };
