import { Invoice } from "@/components/pagesStylesAndUtils/index/index.utils";
import "@/styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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

  return getLayout(<Component {...pageProps} invoiceList={invoiceList} />);
}
