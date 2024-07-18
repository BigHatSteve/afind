import { z } from "zod";

export const waitlistFormSchema = z.object({
    email: z.string().email(),
});

export type WaitlistFormSchema = typeof waitlistFormSchema;
