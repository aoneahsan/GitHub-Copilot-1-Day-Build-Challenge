import { useZNavigate } from '@/hooks/tanstack/router';
import { appRoutes } from '@/utils/constants/route';
import { Button } from 'primereact/button';
import './styles.scss';

const Home: React.FC = () => {
  const zNavigate = useZNavigate();
  return (
    <>
      <Button
        onClick={() => {
          zNavigate(appRoutes.addJournalEntry);
        }}
      >
        add new journal entry
      </Button>
    </>
  );
};

export default Home;
