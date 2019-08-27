import React from 'react';
import shortid from 'shortid';
import {Switch, Route} from 'react-router';

export interface routeType {
  path?: string,
  component?: any ,
  exact?: boolean,
  strict?: boolean,
  render?: any,
  routers?: Array<routeType>,
  key?: number | undefined
}


function renderRoutes(routes : routeType [] , extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch key={shortid.generate()} {...switchProps}>
      {routes.map((route) => {
        console.log(route.key);
        return route.routers ? renderRoutes(route.routers) : <Route
          key={shortid.generate()}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props =>
            route.render ? (
              route.render({...props, ...extraProps, route: route})
            ) : (
              <route.component {...props} {...extraProps} route={route}/>
            )
          }
        >
        </Route>
      })}
    </Switch>
  ) : null;
}

export default renderRoutes;