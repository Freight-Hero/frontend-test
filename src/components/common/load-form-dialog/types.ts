import { z } from "zod";

import { loadFormSchema } from "./schemas";


export type LoadFormValues = z.infer<typeof loadFormSchema>;

export interface LoadFormDialogProps {
  onSubmit: (values: LoadFormValues) => void;
  defaultValues?: LoadFormValues;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  mode?: 'create' | 'edit';
  onDelete?: () => void;
}