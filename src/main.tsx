import "./index.scss";
import "@/Component/FunctionComponent/i18n/i18n"

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import {Provider} from "react-redux/es/exports";
import {store} from "./Redux/store";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <Provider store={store}>
            <App/>
          </Provider>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
);