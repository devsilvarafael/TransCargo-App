import {PrismaClient} from "@prisma/client";
import {Request, Response} from "express";

const prisma = new PrismaClient();

export const getAllAdministrators = async (_req: Request, res: Response) => {
   try {
       const admins = await prisma.administrator.findMany();

        return res.status(200).json(admins)
   } catch (err) {
       res.status(500).json({ message: 'Internal Server Error'})
   }
}