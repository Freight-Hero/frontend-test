import logo from '@assets/logo.svg';
import { SplashScreenProps } from './types';


export const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <div className="bg-slate-100">
      <img src={logo} alt="Freight Hero" className='w-48' />
    </div>
  );
};
