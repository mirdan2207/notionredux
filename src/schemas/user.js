import { z } from "zod";

export const User = z.object({
  email: z.string().email({ message: "Should be email" }),
  password: z.string(),
});
