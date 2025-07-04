"use client";

import { Provider } from "react-redux";
import { store } from "@/store";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <main>{children}</main>
    </Provider>
  );
};

export default ClientLayout;
