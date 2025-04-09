import { FC } from 'react';

import { useLoadsContext } from '@/contexts/loads-context';


export const Pagination: FC = () => {
  const {
    loads,
    currentPage,
    totalPages,
    setCurrentPage
  } = useLoadsContext();

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-1 flex-col md:flex-row gap-4 items-center justify-between bg-white p-4">
      <p className="text-sm text-slate-500">
        Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{' '}
        <span className="font-medium">{Math.min(currentPage * 10, totalPages * 10)}</span> of{' '}
        <span className="font-medium">{loads.length}</span> results
      </p>
      <nav className="flex gap-1 items-center" aria-label="Pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex rounded-sm items-center px-2 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700 focus:z-20 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`relative inline-flex rounded-sm items-center px-4 py-2 text-sm font-medium ${currentPage === page
              ? 'bg-slate-100 text-slate-900'
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex rounded-sm items-center px-2 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700 focus:z-20 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
  );
}; 