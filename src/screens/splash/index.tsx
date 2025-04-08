import logo from '@assets/logo.svg';
import { SplashScreenProps } from './types';
import { LoadsWrapper } from '@/components/common/LoadsWrapper';


export const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <div className="bg-slate-100 w-full h-screen flex flex-col items-center py-24 max-w-screen-md mx-auto gap-12">
      <div className='flex flex-col items-center justify-center gap-2'>
        <img src={logo} alt="Freight Hero" className='w-48' />
        <p className='text-slate-400 font-thin'>Load Management</p>
      </div>
      <LoadsWrapper />
    </div>
  );
};
