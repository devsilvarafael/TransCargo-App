import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body;

        const passwordHash = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash,
                role
            }
        })

        if (user.role === "ADM") {
            const { document } = req.body;

            await prisma.administrator.create({
                data: {
                    document,
                    user: {
                        connect: { id: user.id }
                    }
                }
            })
        }

        if (user.role === "CUSTOMER") {
            const { cnpj, address } = req.body;

            await prisma.customer.create({
                data: {
                    cnpj,
                    address,
                    user: {
                        connect: { id: user.id }
                    }
                }
            })
        }

        if (user.role === "DRIVER") {
            const { age, cnh } = req.body;

            await prisma.driver.create({
                data: {
                    age,
                    cnh,
                    user: {
                        connect: { id: user.id }
                    }
                }
            })
        }

        res.status(201).json(user);
    } catch (err) {
        return res.status(404).json({ message: "Ocorreu um problema ao criar o usuário." })
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.administrator.deleteMany({
            where: {
                userId: id
            }
        })

        await prisma.driver.deleteMany({
            where: {
                userId: id,
            },
        });

        await prisma.customer.deleteMany({
            where: {
                userId: id,
            },
        });

        // Excluir o usuário
        await prisma.user.delete({
            where: {
                id: id,
            },
        });

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};