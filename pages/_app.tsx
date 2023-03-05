import { Layout } from "@/components/Layout/Layout";
import { Invoice } from "@/components/pagesStylesUtils/index/index.utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
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

  return (
    <Layout>
      <Component {...pageProps} invoiceList={invoiceList} />
    </Layout>
  );
}
