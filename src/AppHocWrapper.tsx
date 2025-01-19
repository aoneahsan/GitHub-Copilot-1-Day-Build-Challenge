import { PrimeReactProvider } from 'primereact/api';
import Home from '@/pages/Home';

const AppHocWrapper: React.FC = () => {
  return (
    <PrimeReactProvider>
      <Home />
    </PrimeReactProvider>
  );
};

export default AppHocWrapper;
