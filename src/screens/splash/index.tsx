import logo from '@assets/logo.svg';
import { SplashScreenProps } from './types';
import { LoadsWrapper } from '@/components/common/loads-wrapper';


export const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <div className="bg-slate-100 w-full min-h-screen flex flex-col items-center py-24 max-w-screen-lg mx-auto gap-12">
      <div className='flex flex-col items-center justify-center gap-1.5'>
        <img src={logo} alt="Freight Hero" className='w-48' />
        <p className='text-slate-500 text-sm font-extralight'>load management</p>
      </div>
      <LoadsWrapper />
      <p className='text-slate-500 text-sm font-extralight'>©2025 FreightHero. All Rights Reserved. Privacy Policy.</p>
    </div>
  );
};
