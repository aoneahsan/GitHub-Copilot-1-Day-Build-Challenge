import { useZNavigate } from '@/hooks/tanstack/router';
import { appRoutes } from '@/utils/constants/route';
import { Button } from 'primereact/button';

const JournalForm: React.FC = () => {
  const zNavigate = useZNavigate();

  return (
    <>
      <h1>JournalForm</h1>
      <Button
        onClick={() => {
          zNavigate(appRoutes.home);
        }}
      >
        go to home
      </Button>
    </>
  );
};

export default JournalForm;
