import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCustomers = async (_req: Request, res: Response) => {
    try {
        const customers = await prisma.customer.findMany();

        return res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}