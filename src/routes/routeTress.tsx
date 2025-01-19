import { createRootRoute, Outlet } from '@tanstack/react-router';
import {
  addJournalEntryPageRoute,
  homePageRoute,
  loginPageRoute,
  registerPageRoute,
} from './appRoutes';

const AppRouteRouteLayout: React.FC = () => {
  return <Outlet />;
};

export const appRootRoute = createRootRoute({
  component: AppRouteRouteLayout,
});

export const routeTree = appRootRoute.addChildren([
  homePageRoute,
  addJournalEntryPageRoute,
  loginPageRoute,
  registerPageRoute,
]);
