import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { validateCNPJ } from "../utils/validateCNPJ";

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
    const { name, email, role, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10)

    try {
        const user = await prisma.user.create({ data: { name, email, role, password: passwordHash } });

        if(role === "driver") {
            const { cnh } = req.body;

            await prisma.driver.create({
                data: {
                    cnh,
                    user: {
                        connect: {
                            id: user.id,
                        },
                    },
                },
            });

            console.log('Criou motorista')

        }

        if(role === "customer") {
            const { cnpj } = req.body;

            const isValid = validateCNPJ(cnpj);

            if (!isValid) {
                return res.status(400).json({ error: 'CNPJ inválido' });
            }

            await prisma.customer.create({
                data: {
                    cnpj,
                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            })

        }

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        // Excluir o registro de Driver associado ao usuário, se existir
        await prisma.driver.deleteMany({
            where: {
                userId: Number(id),
            },
        });

        // Excluir o registro de Customer associado ao usuário, se existir
        await prisma.customer.deleteMany({
            where: {
                userId: Number(id),
            },
        });

        // Excluir o usuário
        await prisma.user.delete({
            where: {
                id: Number(id),
            },
        });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};