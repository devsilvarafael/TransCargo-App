import {PrismaClient} from "@prisma/client";

export async function verifyDocumentDuplication(cpf: string): Promise<boolean> {
    const prisma = new PrismaClient();

    const documentExists = await prisma.administrator.findUnique({
        where: {
            document: cpf
        }
    })

    if(documentExists && documentExists.document === cpf) {
        return true;
    }

    return false;
}