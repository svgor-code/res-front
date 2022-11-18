import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./routes";
import { PrivateRoutes, privatePaths } from "./config";
import PageLayout from "src/layouts/PageLayout/PageLayout";

const RoutesWrapper = () => {
  return (
    <Switch>
      <Route exact path={privatePaths}>
        <PageLayout>
          <Suspense fallback={<div>Loading...</div>}>
            {PrivateRoutes.map((route) => (
              <PrivateRoute
                exact
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
          </Suspense>
        </PageLayout>
      </Route>
      {/* Здесь роуты для авторизации и системных страниц */}
    </Switch>
  );
};

export default RoutesWrapper;
