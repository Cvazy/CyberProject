import React, { Suspense } from "react";
import { Loader } from "shared/ui";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config";

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(RouteConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
