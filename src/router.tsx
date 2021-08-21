import { VFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './pages';

export interface RoutesParams {
  dashboard: null;
  imageDetails: {
    id: string;
  };
}

export const Routes: VFC = () => {
  return (
    <Switch>
      <Route path={'/'}>
        <Dashboard />
      </Route>
    </Switch>
  );
};
