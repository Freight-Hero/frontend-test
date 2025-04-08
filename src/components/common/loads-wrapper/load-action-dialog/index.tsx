import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { PlusIcon } from 'lucide-react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLoadsContext } from '@/contexts/loads-context';
import { Load } from '@/types/load';

const formSchema = z.object({
  status: z.enum(['pick up', 'in route', 'delivered'], {
    required_error: 'Please select a status',
  }),
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  client_name: z.string().min(1, 'Client name is required'),
  carrier_name: z.string().min(1, 'Carrier name is required'),
});

type FormValues = z.infer<typeof formSchema>;

export const LoadActionDialog: FC = () => {
  const { loads, setLoads } = useLoadsContext();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: 'pick up',
      origin: '',
      destination: '',
      client_name: '',
      carrier_name: '',
    },
  });

  const handleSubmit = (values: FormValues) => {
    // Generate a new ID by finding the highest existing ID and adding 1
    const newId = Math.max(...loads.map(load => load.id), 0) + 1;
    
    const newLoad: Load = {
      id: newId,
      ...values,
    };

    setLoads(prevLoads => [newLoad, ...prevLoads]);
    form.reset();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="cta">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Load
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>Add New Load</DialogTitle>
          <DialogDescription className='text-sm text-gray-500'>
            Fill in the details below to create a new load.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pick up">Pick Up</SelectItem>
                      <SelectItem value="in route">In Route</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Origin</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter origin location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter destination location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="client_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter client name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="carrier_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Carrier Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter carrier name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => {
                form.reset();
                setIsOpen(false);
              }}>
                Cancel
              </Button>
              <Button type="submit" variant="cta">Create Load</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};