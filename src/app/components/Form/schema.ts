import { z } from "zod";

const defaultError = "Campo obrigatório";

export const schema = z.object({
  taxRegime: z.string().min(1, defaultError),
  segment: z.string().min(1, defaultError),
  billingRange: z.string().min(1, defaultError),
  employees: z.string().min(1, defaultError),
  name: z.string().min(1, defaultError),
  email: z.string().min(1, defaultError),
  phone: z.string().min(1, defaultError),
});

export type FormDTO = z.infer<typeof schema>;
