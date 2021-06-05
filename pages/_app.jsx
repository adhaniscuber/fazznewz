import React from "react";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { AuthProvider } from "@module/firebase/context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
