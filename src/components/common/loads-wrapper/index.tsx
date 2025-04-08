import { FC } from 'react';
import { Pagination } from '@/components/ui/pagination';
import { useLoadsContext } from '@/contexts/loads-context';
import { LoadsWrapperProps } from './types';
import { LoadStatusBadge } from '@/components/ui/load-status-badge';
import { SearchInput } from './search-input';
import { FiltersDropdown } from './filters-dropdown';
import { SortableHeader } from '@/components/common/table/sortable-header';
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

  if (isLoading) {
    return (
      <div className='bg-white rounded-sm border border-slate-100 w-full p-6'>
        <div className='animate-pulse space-y-4'>
          <div className='h-4 bg-slate-200 rounded w-1/4'></div>
          <div className='h-4 bg-slate-200 rounded w-1/2'></div>
        </div>
      </div>
    );
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
      <div className='p-4 flex items-center justify-between'>
        <SearchInput />
        <FiltersDropdown />
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
                    className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'
                  />
                ))}
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {paginatedLoads.map((load) => (
                <tr key={load.id} className='hover:bg-slate-50 transition-colors'>
                  <td className='py-4 px-4 text-sm text-slate-900 font-medium'>{load.id}</td>
                  <td className='py-4 px-4'>
                    <LoadStatusBadge status={load.status} />
                  </td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.origin}</td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.destination}</td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.client_name}</td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.carrier_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      <Pagination />
    </div>
  );
}; 