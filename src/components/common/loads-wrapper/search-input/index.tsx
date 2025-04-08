import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { FC } from 'react';


export const SearchInput: FC = () => {
  return (
    <div className='relative'>
      <Search  className='size-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
      <Input placeholder='Search' className='pl-10' />
    </div>
  );
};