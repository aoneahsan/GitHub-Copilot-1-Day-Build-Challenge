import { RouterProvider } from '@tanstack/react-router';
import { PrimeReactProvider } from 'primereact/api';
import appRouter from './routes';

const AppHocWrapper: React.FC = () => {
  return (
    <PrimeReactProvider>
      <RouterProvider router={appRouter} />
    </PrimeReactProvider>
  );
};

export default AppHocWrapper;
