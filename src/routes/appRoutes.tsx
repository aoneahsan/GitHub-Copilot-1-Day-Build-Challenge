import NotFound from '@/components/NotFound';
import Home from '@/pages/Home';
import JournalForm from '@/pages/JournalForm';
import { appRoutes } from '@/utils/constants/route';
import { createRoute } from '@tanstack/react-router';
import { appRootRoute } from './routeTress';

export const homePageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return <Home />;
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.home,
});

export const addJournalEntryPageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return <JournalForm />;
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.addJournalEntry,
});
