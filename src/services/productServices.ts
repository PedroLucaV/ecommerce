import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createProductService = async (product: object) => {
    return prisma.produto.create({data: product});
}

export const getProductsService = async () => {
    return prisma.produto.findMany();
}