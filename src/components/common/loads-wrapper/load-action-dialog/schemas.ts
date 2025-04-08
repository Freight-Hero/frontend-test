import { z } from "zod";

export const loadFormSchema = z.object({
  status: z.enum(['pick up', 'in route', 'delivered'], {
    required_error: 'Please select a status',
  }),
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  client_name: z.string().min(1, 'Client name is required'),
  carrier_name: z.string().min(1, 'Carrier name is required'),
});