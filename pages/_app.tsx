import { Invoice } from "@/components/Index/index.utils";
import "@/styles/globals.css";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [invoiceList, setInvoiceList] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoiceList(
      JSON.parse(window.localStorage.getItem("invoiceData") || "[]")
    );

    const fetchData = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();

      window.localStorage.setItem("invoiceData", JSON.stringify(data));

      setInvoiceList(data);
    };

    fetchData();
  }, []);

  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} invoiceList={invoiceList} />
    </SessionProvider>
  );
}
