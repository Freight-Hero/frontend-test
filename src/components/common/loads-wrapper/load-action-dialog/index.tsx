import { FC } from 'react';

import { LoadFormDialog } from '../../load-form-dialog';
import { LoadFormValues } from '../../load-form-dialog/types';

import { LoadActionDialogProps } from './types';

import { useLoadsContext } from '@/contexts/loads-context';

export const LoadActionDialog: FC<LoadActionDialogProps> = ({ load, onClose }) => {
  const { updateLoad, deleteLoad } = useLoadsContext();

  const handleSubmit = (values: LoadFormValues) => {
    updateLoad(load.id, { ...load, ...values });
    onClose();
  };

  const handleDelete = () => {
    deleteLoad(load.id);
  };

  return (
    <LoadFormDialog
      onSubmit={handleSubmit}
      defaultValues={load}
      isOpen={true}
      onOpenChange={(open) => !open && onClose()}
      mode="edit"
      onDelete={handleDelete}
    />
  );
};