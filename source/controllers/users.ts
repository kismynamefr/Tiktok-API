import { NextFunction, Request, response, Response } from "express";
import mongoose from "mongoose";
import users from "../models/users";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const {userName} = req.query;
  if(!userName) return;
  const allUsers = await users.find({});
  const result = allUsers.filter(respon => 
    respon.username.includes(`${userName}`)
  )
  return result
    ? res.status(200).json(result)
    : res.status(200).json({ message: "Not found" });
};
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  const result = await users.find({});
  return result
    ? res.status(200).json(result)
    : res.status(200).json({ message: "Not found" });
};

export default {
  getUsers,
  getAllUsers,
};
