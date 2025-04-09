import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { PlusIcon } from 'lucide-react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { loadFormSchema } from './schemas';
import { LoadFormDialogProps, LoadFormValues } from './types';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const LoadFormDialog: FC<LoadFormDialogProps> = ({
  onSubmit,
  defaultValues = {
    status: 'pick up',
    origin: '',
    destination: '',
    client_name: '',
    carrier_name: '',
  },
  isOpen: isOpenProp,
  onOpenChange,
  mode = 'create',
  onDelete
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const isOpen = isOpenProp ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;

  const form = useForm<LoadFormValues>({
    resolver: zodResolver(loadFormSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: LoadFormValues) => {
    onSubmit(values);
    form.reset();
    setIsOpen(false);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (onDelete) onDelete();

    setShowDeleteConfirm(false);
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {mode === 'create' && (
          <DialogTrigger asChild>
            <Button variant="cta">
              <PlusIcon className="h-4 w-4" />
              Add Load
            </Button>
          </DialogTrigger>
        )}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold'>
              {mode === 'create' ? 'Add New Load' : 'Edit Load'}
            </DialogTitle>
            <DialogDescription className='text-sm text-gray-500'>
              {mode === 'create'
                ? 'Fill in the details below to create a new load.'
                : 'Update the load details below.'}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
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
              </div>
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => {
                  form.reset();
                  setIsOpen(false);
                }}>
                  Cancel
                </Button>
                {mode === 'edit' && (
                  <Button type="button" variant="destructive" onClick={handleDelete}>
                    Delete Load
                  </Button>
                )}
                <Button type="submit" variant="cta" tabIndex={0}>
                  {mode === 'create' ? 'Create Load' : 'Update Load'}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold'>Delete Load</DialogTitle>
            <DialogDescription className='text-sm text-gray-500'>
              Are you sure you want to delete this load? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4 mt-4">
            <Button type="button" variant="outline" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </Button>
            <Button type="button" variant="destructive" onClick={confirmDelete}>
              Delete Load
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};