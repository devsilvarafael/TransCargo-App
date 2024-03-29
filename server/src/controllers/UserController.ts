import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {validateCNPJ} from "../utils/validateCNPJ";
import {verifyDocumentDuplication} from "../utils/verifyDocumentDuplication";
import {documentValidator} from "../utils/documentValidator";

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

        if (!['ADM', 'CUSTOMER', 'DRIVER'].includes(role)) {
            return res.status(401).json({ message: 'Cargo inválido' })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const userData = {
            name,
            email,
            password: passwordHash,
            role
        };


        if (role === "ADM") {
            const { document } = req.body;

            const validatedDocument = documentValidator(document);
            const verifyDuplicatedDocument = verifyDocumentDuplication(document);

            if(await verifyDuplicatedDocument) {
                return res.status(400).json({ message: 'CPF já cadastrado no sistema.'})
            }

            if(validatedDocument) {
                  await prisma.administrator.create({
                    data: {
                        document,
                        user: {
                            create: userData
                        }
                    }
                })
            } else {
                return res.status(401).json({ message: 'CPF inválido' })
            }
        }

        if (role === "CUSTOMER") {
            const { cnpj, address } = req.body;

            const validCNPJ = validateCNPJ(cnpj)

            if(validCNPJ) {
                 await prisma.customer.create({
                    data: {
                        cnpj,
                        address,
                        user: {
                            create: userData
                        }
                    }
                })
            }


            return res.status(401).json({ message: 'CNPJ invalido' })
        }

        if (role === "DRIVER") {
            const { age, cnh } = req.body;

             await prisma.driver.create({
                data: {
                    age,
                    cnh,
                    user: {
                        create: userData
                    }
                }
            })
        }

        res.status(201).json(userData);
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