import React from "react";
import ReactDOM from "react-dom/client";
import "app/index.css";
import Shop from "app/Shop";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "shared/config/i18n/i18n";
import { StoreProvider } from "./app/providers/StoreProvider";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <Shop />
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);

reportWebVitals();
