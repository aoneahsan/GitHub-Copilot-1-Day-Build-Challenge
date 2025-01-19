import { createRootRoute, Outlet } from '@tanstack/react-router';
import { addJournalEntryPageRoute, homePageRoute } from './appRoutes';

const AppRouteRouteLayout: React.FC = () => {
  return <Outlet />;
};

export const appRootRoute = createRootRoute({
  component: AppRouteRouteLayout,
});

export const routeTree = appRootRoute.addChildren([
  homePageRoute,
  addJournalEntryPageRoute,
]);
