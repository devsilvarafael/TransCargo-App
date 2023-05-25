import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllDrivers = async (_req: Request, res: Response) => {
    try {
        const drivers = await prisma.driver.findMany();

        res.status(200).json(drivers);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error"} )
    }
}