import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Rafael Silva',
            email: 'admin@transcargo.com',
            password: 'admin',
            role: "adm"
        },
    })
}

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, role, password } = req.body;
    try {
        const user = await prisma.user.create({ data: { name, email, role, password } });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.user.delete({ where: { id: Number(id) } });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

main();