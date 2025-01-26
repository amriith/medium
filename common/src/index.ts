import z from "zod";


const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SignupInput = z.infer<typeof signupInput>

const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SigninInput = z.infer<typeof signinInput>
