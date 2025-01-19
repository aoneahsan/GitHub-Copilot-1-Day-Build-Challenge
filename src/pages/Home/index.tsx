import ZButton from '@/components/ZButton';
import ZTranslate from '@/components/ZTranslate';
import { useZNavigate } from '@/hooks/tanstack/router';
import { useZTolgee, useZTolgeeTranslate } from '@/hooks/tolgee';
import { appRoutes } from '@/utils/constants/route';
import { tolgeeTranslationKeys } from '@/utils/tolgee';
import './styles.scss';

const Home: React.FC = () => {
  const zNavigate = useZNavigate();
  const zTranslate = useZTolgeeTranslate();
  const zTolgee = useZTolgee();

  return (
    <>
      <select
        onChange={(e) => zTolgee.changeLanguage(e.target.value)}
        value={zTolgee.getLanguage()}
      >
        <option value='en'>🇬English</option>
        <option value='ar'>🇨Arabic</option>
      </select>
      <br />
      <ZButton
        onClick={() => {
          zNavigate(appRoutes.addJournalEntry);
        }}
      >
        <ZTranslate
          keyName={tolgeeTranslationKeys.journal.addNewJournalEntry}
        />
      </ZButton>

      <button
        onClick={() => {
          throw new Error('This is your first error!');
        }}
      >
        {zTranslate({ keyName: tolgeeTranslationKeys.sentry.breakTheWorld })}
      </button>

      <h1>{zTranslate({ keyName: tolgeeTranslationKeys.sentry.testing1 })}</h1>
      <h2>
        <ZTranslate keyName={tolgeeTranslationKeys.sentry.testing2} />
      </h2>
    </>
  );
};

export default Home;
