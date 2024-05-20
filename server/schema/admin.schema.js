import {z} from 'zod';

export const adminInputSchema = z.object({
    phoneNumber : z.string(),
    email: z.string().email(),
    password : z.string()
})

export const adminLoginSchema = z.object({
    phoneNumber: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string()
})