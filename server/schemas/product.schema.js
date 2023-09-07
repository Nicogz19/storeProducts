import {z} from 'zod'

export const createProductSchema = z.object({
    title: z.string({
        required_error: 'El titulo es requerido'
    }),
    description: z.string().optional(),
    date: z.string().optional(),
    price: z.number({
        required_error: 'El precio es requerido'
    })
})