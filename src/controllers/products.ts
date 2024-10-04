import { PrismaClient } from '@prisma/client';
import { Product } from '../classes/classes';
import { Request, Response } from 'express';
import { createProductValidate } from '../helper/zod';
import formatZodError from '../helper/formatZodError';

const prisma = new PrismaClient();

export const getProducts = async (req: any, res: any) => {
    const products = await prisma.produto.findMany();
    res.status(200).json(products);
}

export const createProduct = async (req: any, res: any) => {
    const bodyValidation = createProductValidate.safeParse(req.body);

    if(!bodyValidation.success){
        return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)});
    }
    const product:Product = bodyValidation.data;

    const created = await prisma.produto.create({data: product});
    res.status(201).json("Produto criado com sucesso!");
}