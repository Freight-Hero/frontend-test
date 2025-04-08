import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/tailwind/cn'
import { SortableHeaderProps } from './types'

export const SortableHeader = <T,>({
  label,
  sortKey,
  sortConfig,
  onSort,
  className,
}: SortableHeaderProps<T>) => {
    const isSorted = sortConfig.key === sortKey

  return (
    <th
      className={cn(
        'cursor-pointer select-none hover:bg-slate-50 transition-colors',
        className
      )}
      onClick={() => onSort(sortKey)}
    >
      <div className='flex items-center gap-2'>
        {label}
        {isSorted && <ChevronUp className={`size-4 duration-200 ${sortConfig.direction === 'asc' ? 'rotate-180' : ''}`} />}
      </div>
    </th>
  )
} 