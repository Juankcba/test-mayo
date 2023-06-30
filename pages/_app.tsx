import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import darkTheme from "../themes/DarkTheme.jsx";
import { ToastContainer, toast } from "react-toastify";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <NextUIProvider theme={darkTheme}>
          <Component {...pageProps} />
          <ToastContainer />
        </NextUIProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
