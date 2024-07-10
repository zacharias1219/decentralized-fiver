import { SignatureKind } from "typescript";
import z from "zod";

const createTaskInput = z.object({
    options: z.array(z.object({
        imageUrl: z.string(),
    })),
    title: z.string().optional(),
    Signature: z.string()
})