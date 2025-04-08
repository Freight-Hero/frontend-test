import { FC } from 'react';
import { LoadsWrapperProps } from './types';

export const LoadsWrapper: FC<LoadsWrapperProps> = () => {
  return (
    <div className='bg-white rounded-xl shadow-sm border border-slate-100 w-full overflow-hidden'>
      <div className='p-6 border-b border-slate-100'>
        <h2 className='text-2xl font-semibold text-slate-900'>Load Management</h2>
        <p className='text-slate-500 mt-1'>Track and manage your loads efficiently</p>
      </div>
      
      <div className='p-6'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-slate-100'>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Load Number</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Load Type</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Status</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Date</th>
                <th className='text-left py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Time</th>
                <th className='text-right py-3 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              <tr className='hover:bg-slate-50 transition-colors'>
                <td className='py-4 px-4 text-sm text-slate-900 font-medium'>1234567890</td>
                <td className='py-4 px-4 text-sm text-slate-600'>Full Truck Load</td>
                <td className='py-4 px-4'>
                  <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                    In Transit
                  </span>
                </td>
                <td className='py-4 px-4 text-sm text-slate-600'>2024-04-08</td>
                <td className='py-4 px-4 text-sm text-slate-600'>14:30</td>
                <td className='py-4 px-4 text-right'>
                  <button className='text-slate-400 hover:text-slate-600 transition-colors'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};