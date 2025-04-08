import { FC } from 'react';

import { LoadFormDialog } from '../../load-form-dialog';
import { LoadFormValues } from '../../load-form-dialog/types';

import { useLoadsContext } from '@/contexts/loads-context';

export const LoadActionDialog: FC = () => {
  const { loads } = useLoadsContext();
  console.log("🚀 ~ loads:", loads)

  const handleSubmit = (values: LoadFormValues) => {
    // edit the load
  };

  return (
    <LoadFormDialog onSubmit={handleSubmit} />
  );
};