import { Route, RouteProps } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  if (!Component) {
    return <></>;
  }

  return <Route path={rest.path} exact component={Component} />;
};
