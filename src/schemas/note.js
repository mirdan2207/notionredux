import { z } from "zod";

export const Note = z.object({
  title: z.string().min(1),
  body: z.string().optional(),
});
