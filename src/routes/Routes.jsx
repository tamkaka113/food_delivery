import { Suspense,lazy } from "react";
import { Route, Switch } from "react-router-dom";

import routesConfig from "configs/routesConfig";


function Routes() {
  return (
  <Suspense> 
      <Switch>
        {routesConfig.map(({ exact, path, component }, index) => (
          <Route
            key={index}
            path={path}
            component={component}
            exact={exact}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default Routes;
