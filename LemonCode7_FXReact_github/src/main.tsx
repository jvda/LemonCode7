import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { routerSwitchRoutes, LastSearchProvider, SearchHistoryProvider } from './core';
import { MembersSearchScene, MemberDetailScene } from './scenes';

ReactDOM.render(
  <LastSearchProvider>
    <SearchHistoryProvider>
      <HashRouter>
        <Switch>
          <Route
            exact={true}
            path={[routerSwitchRoutes.root, routerSwitchRoutes.searchOrganization]}
            component={MembersSearchScene}
          />
          <Route
            path={routerSwitchRoutes.detailMember}
            component={MemberDetailScene}
          />
        </Switch>
      </HashRouter>
    </SearchHistoryProvider>
  </LastSearchProvider>,
  document.getElementById('root')
);
