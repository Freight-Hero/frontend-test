import { FC, useState } from 'react';

import { CreateLoadDialog } from './create-load-dialog';
import { FiltersDropdown } from './filters-dropdown';
import { LoadActionDialog } from './load-action-dialog';
import { LoadsWrapperSkeleton } from './loads-wrapper-skeleton';
import { SearchInput } from './search-input';
import { LoadsWrapperProps } from './types';

import { SortableHeader } from '@/components/common/table/sortable-header';
import { LoadStatusBadge } from '@/components/ui/load-status-badge';
import { Pagination } from '@/components/ui/pagination';
import { useLoadsContext } from '@/contexts/loads-context';
import { Load } from '@/types/load';


const TABLE_COLUMNS: { key: keyof Load; label: string }[] = [
  { key: 'id', label: 'Load ID' },
  { key: 'status', label: 'Status' },
  { key: 'origin', label: 'Origin' },
  { key: 'destination', label: 'Destination' },
  { key: 'client_name', label: 'Client' },
  { key: 'carrier_name', label: 'Carrier' },
];

export const LoadsWrapper: FC<LoadsWrapperProps> = () => {
  const {
    paginatedLoads,
    isLoading,
    error,
    sortConfig,
    handleSort,
  } = useLoadsContext();

  const [selectedLoad, setSelectedLoad] = useState<Load | null>(null);

  if (isLoading) {
    return <LoadsWrapperSkeleton />;
  }

  if (error) {
    return (
      <div className='bg-white rounded-sm border border-slate-100 w-full p-6'>
        <div className='text-red-500'>Error loading loads: {error.message}</div>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-sm border border-slate-100 w-full overflow-hidden flex flex-col gap-4'>
      <div className='p-4 flex items-center justify-between flex-wrap gap-4'>
        <div className="flex sm:gap-4 gap-2 flex-col sm:flex-row flex-1">
          <SearchInput />
          <FiltersDropdown />
        </div>
        <CreateLoadDialog />
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-slate-100'>
              {TABLE_COLUMNS.map((column) => (
                <SortableHeader<Load>
                  key={column.key}
                  label={column.label}
                  sortKey={column.key}
                  sortConfig={sortConfig}
                  onSort={handleSort}
                  className='text-left whitespace-nowrap py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'
                />
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-100'>
            {paginatedLoads.map((load) => (
              <tr
                key={load.id}
                className='hover:bg-slate-50 cursor-pointer'
                onClick={() => setSelectedLoad(load)}
              >
                <td className='py-2 md:py-4 px-4 text-sm text-slate-900 font-medium whitespace-nowrap'>{load.id}</td>
                <td className='py-2 md:py-4 px-4 whitespace-nowrap'>
                  <LoadStatusBadge status={load.status} />
                </td>
                <td className='py-2 md:py-4 px-4 text-sm text-slate-600 whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis'>{load.origin}</td>
                <td className='py-2 md:py-4 px-4 text-sm text-slate-600 whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis'>{load.destination}</td>
                <td className='py-2 md:py-4 px-4 text-sm text-slate-600 whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis'>{load.client_name}</td>
                <td className='py-2 md:py-4 px-4 text-sm text-slate-600 whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis'>{load.carrier_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
      {selectedLoad && <LoadActionDialog load={selectedLoad} onClose={() => setSelectedLoad(null)} />}
    </div>
  );
}; 