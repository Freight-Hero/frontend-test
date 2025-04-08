import { FC } from 'react';

import { LoadFormDialog } from '../../load-form-dialog';
import { LoadFormValues } from '../../load-form-dialog/types';

import { useLoadsContext } from '@/contexts/loads-context';
import { Load } from '@/types/load';

export const LoadActionDialog: FC = () => {
  const { loads, setLoads } = useLoadsContext();

  const handleSubmit = (values: LoadFormValues) => {
    const newId = Math.max(...loads.map(load => load.id), 0) + 1;
    
    const newLoad: Load = {
      id: newId,
      ...values,
    };

    setLoads(prevLoads => [newLoad, ...prevLoads]);
  };

  return (
    <LoadFormDialog onSubmit={handleSubmit} />
  );
};