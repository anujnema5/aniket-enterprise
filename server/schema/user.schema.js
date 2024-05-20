import { z } from "zod";

export const userSchema = z.object({
    name: z.string(),
    mobileNumber: z.string().min(10, {message: 'Mobile number should be atleast digit long'}).max(12),
    email: z.string().email(),
    service: z.string(),
    message: z.string()
})