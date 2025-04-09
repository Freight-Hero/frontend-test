import { Search, X } from 'lucide-react'
import { FC, ChangeEvent } from 'react'

import { Input } from '@/components/ui/input'
import { useLoadsContext } from '@/contexts/loads-context'

export const SearchInput: FC = () => {
  const { searchQuery, setSearchQuery } = useLoadsContext()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const resetSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className='relative'>
      <Search className='size-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
      <Input 
        placeholder='Search' 
        className='pl-10 pr-10'
        value={searchQuery}
        onChange={handleSearch}
      />
      {searchQuery && (
        <button
          onClick={resetSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:bg-slate-100 w-6 h-6 rounded-full flex items-center justify-center"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}