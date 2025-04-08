import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { LoadsContextProvider } from './contexts/loads-context';
import { SplashScreen } from './screens/splash';

import './application.css';

const main = document.getElementById('main');
const root = createRoot(main!);

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <SplashScreen />
  }
]);

root.render(
  <StrictMode>
    <LoadsContextProvider>
      <RouterProvider router={browserRouter} />
    </LoadsContextProvider>
  </StrictMode>
);
