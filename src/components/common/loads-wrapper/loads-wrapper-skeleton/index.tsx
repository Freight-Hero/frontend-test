import { FC } from 'react';

export const LoadsWrapperSkeleton: FC = () => {
  return (
    <div className='bg-white rounded-sm border border-slate-100 w-full p-4'>
      <div className='animate-pulse flex flex-col gap-8'>
        {/* Search and Filter Bar */}
        <div className='flex items-center justify-between'>
          <div className='flex gap-4'>
            <div className='h-9 bg-slate-200 rounded-sm w-[240px]'></div>
            <div className='h-9 bg-slate-200 rounded-sm w-[180px]'></div>
          </div>
          <div className='h-9 bg-slate-200 rounded-sm w-[120px]'></div>
        </div>

        {/* Table Header */}
        <div className='flex items-center justify-between gap-4 py-4 border-b'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='h-4 bg-slate-200 rounded w-[100px]' />
          ))}
        </div>

        {/* Table Rows */}
        <div className='flex flex-col gap-8'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='flex items-center justify-between gap-4'>
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className='h-4 bg-slate-200 rounded w-[100px]' />
              ))}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex items-center justify-between gap-4'>
          <div className='h-4 bg-slate-200 rounded-sm w-[120px]'></div>

          <div className='h-9 bg-slate-200 rounded-sm w-[250px]'></div>
        </div>
      </div>
    </div>
  );
};