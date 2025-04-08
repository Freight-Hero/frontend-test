import { FC } from 'react';
import { LoadsWrapperProps } from './types';
import { useLoadsContext } from '@/contexts/LoadsContext';
import { LoadStatusBadge } from '@/components/ui/LoadStatusBadge';

export const LoadsWrapper: FC<LoadsWrapperProps> = () => {
  const { loads, isLoading, error } = useLoadsContext();

  if (isLoading) {
    return (
      <div className='bg-white rounded-xl shadow-sm border border-slate-100 w-full p-6'>
        <div className='animate-pulse space-y-4'>
          <div className='h-4 bg-slate-200 rounded w-1/4'></div>
          <div className='h-4 bg-slate-200 rounded w-1/2'></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-white rounded-xl shadow-sm border border-slate-100 w-full p-6'>
        <div className='text-red-500'>Error loading loads: {error.message}</div>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-xl shadow-sm border border-slate-100 w-full'>
      <div className='p-6 border-b border-slate-100'>
        <h2 className='text-2xl font-semibold text-slate-900'>Load Management</h2>
        <p className='text-slate-500 mt-1'>Track and manage your loads efficiently</p>
      </div>
      
      <div className='p-6'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-slate-100'>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Load ID</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Status</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Origin</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Destination</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Client</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Carrier</th>
                <th className='text-right py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {loads.map((load) => (
                <tr key={load.id} className='hover:bg-slate-50 transition-colors'>
                  <td className='py-4 px-4 text-sm text-slate-900 font-medium'>{load.id}</td>
                  <td className='py-4 px-4'>
                    <LoadStatusBadge status={load.status} />
                  </td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.origin}</td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.destination}</td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.client_name}</td>
                  <td className='py-4 px-4 text-sm text-slate-600'>{load.carrier_name}</td>
                  <td className='py-4 px-4 text-right'>
                    <button 
                      // onClick={() => deleteLoad(load.id)}
                      className='text-slate-400 hover:text-slate-600 transition-colors'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};