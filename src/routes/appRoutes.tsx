import NotFound from '@/components/NotFound';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
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

export const loginPageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return <Login />;
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.login,
});

export const registerPageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return <Register />;
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.register,
});
