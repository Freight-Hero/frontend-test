import { LoadsContextProvider } from '@/contexts/LoadsContext';
import logo from '@assets/logo.svg';

export type SplashScreenProps = {};

export const SplashScreen = (_props: SplashScreenProps) => {
  return (
    <LoadsContextProvider>
      <div className="flex items-center justify-center h-screen bg-black">
        <img src={logo} alt="Freight Hero" />
      </div>
    </LoadsContextProvider>
  );
};
