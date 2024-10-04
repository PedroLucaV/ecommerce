import z from 'zod';

export const createProductValidate = z.object({
    titulo: z.string({message: "O Titulo deve ser uma string!"}).max(255, {message: "O Titulo deve conter no máximo 255 caracteres"}).min(5, {message: "O titulo deve conter ao menos 5 caracteres"}),
    descricao: z.optional(z.string({message: "A descrição deve ser uma string!"}).max(1500, {message: "A descrição deve conter no máximo 1500 caracteres"}).min(10, {message: "A descrição deve conter ao menos 10 caracteres"})),
    preco: z.number({message: "O Preço deve ser um número!"}).nonnegative({message: "O Preço não pode ser negativo!"})
})