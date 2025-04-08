import { FC, ChangeEvent } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useLoadsContext } from '@/contexts/loads-context'

export const SearchInput: FC = () => {
  const { searchQuery, setSearchQuery } = useLoadsContext()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className='relative'>
      <Search className='size-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
      <Input 
        placeholder='Search' 
        className='pl-10'
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  )
}