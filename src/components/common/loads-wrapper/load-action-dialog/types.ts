import { z } from "zod";

import { loadFormSchema } from "./schemas";


export type FormValues = z.infer<typeof loadFormSchema>;