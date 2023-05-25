import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllTrucks = async (_req: Request, res: Response) => {
    try {
        const trucks = await prisma.truck.findMany();
        res.status(200).json(trucks);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error'} )
    }
}

export const createTruck = async (req: Request, res: Response) => {
    const { driverId, capacity, plate, fabricationYear, truckModel } = req.body;

    try {
        const truck = await prisma.truck.create({
            data: {
                driver: {
                    connect: { id: driverId }
                },
                capacity,
                plate,
                fabricationYear,
                truckModel,
            }
        })

        res.status(201).json(truck);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error'})
    }
}

export const deleteTruck = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.truck.delete({
            where: {
                id,
            },
        });

        res.json({ message: "Truck deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error'} )
    }
}