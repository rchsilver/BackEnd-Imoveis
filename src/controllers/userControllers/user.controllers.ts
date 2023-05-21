import { Request, Response } from "express";
import { TUserLogin, TUserRequest } from "../../interfaces/user.interface";
import {
  createUserServices,
  deleteUserServices,
  listenUsersServices,
  loginUserServices,
  updateUserServices,
} from "../../services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;
  const newUser = await createUserServices(userData);
  return res.status(201).json(newUser);
};

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserLogin = req.body;
  const token: string = await loginUserServices(userData);
  return res.status(200).json({ token });
};

const listenUsersController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const listenUsers = await listenUsersServices();

  return res.status(200).json(listenUsers);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  await deleteUserServices(id);
  return res.status(204).send();
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const userData = req.body;
  const updateUsers = await updateUserServices(id, userData);

  return res.status(200).json(updateUsers);
};

export {
  createUserController,
  loginUserController,
  listenUsersController,
  deleteUserController,
  updateUsersController,
};
