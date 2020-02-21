import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllTradersInfo from '../pages/AllTraderInfo'
import ResultTrading from '../pages/ResultTrading'


const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AllTradersInfo} />
      <Route path="/result" component={ResultTrading} />
    </Switch>
  </main>
);

export default Routes;
