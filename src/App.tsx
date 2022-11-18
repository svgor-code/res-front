import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import PageLayout from "./layouts/PageLayout/PageLayout";

import { routeArray } from "./Routing/RouteInterface";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        {routeArray.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                {item.component}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </PageLayout>
  );
};

export default App;
