import React, { VFC } from 'react';
import { Route, Switch } from 'react-router';
import {
    dashboardPath, productPath
} from './constants/routes';
import { Dashboard, Product } from './pages';

export const Router: VFC = () => {
  return (
    <Switch>
      <Route exact={true} path={dashboardPath} component={Dashboard} />
      <Route path={productPath} component={Product} />
    </Switch>
  );
};
