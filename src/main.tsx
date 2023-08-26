import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { MenuContextProvider } from "./context/Menu.tsx";
import { OrderContextProvider } from "./context/Order.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <OrderContextProvider>
        <App />
      </OrderContextProvider>
    </MenuContextProvider>
  </React.StrictMode>
);
