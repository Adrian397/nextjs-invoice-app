import { List, NoListItems, Wrapper } from "@/components/Index/index.styled";
import { Invoice } from "@/components/Index/index.utils";
import { InvoiceListHeader } from "@/components/InvoiceList/InvoiceListHeader/InvoiceListHeader";
import InvoiceListItem from "@/components/InvoiceList/InvoiceListItem/InvoiceListItem";
import { Layout } from "@/components/Layout/Layout";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { ReactElement, useMemo, useState } from "react";
import type { NextPageWithLayout } from "./_app";

type Props = {
  invoiceList: Invoice[];
};

const Home: NextPageWithLayout<Props> = ({ invoiceList }: Props) => {
  const [activeStatuses, setActiveStatuses] = useState<string[]>([]);

  const filteredInvoices = useMemo(() => {
    if (activeStatuses.length === 0) {
      return invoiceList;
    }
    return invoiceList.filter((invoice) =>
      activeStatuses.includes(invoice.status)
    );
  }, [activeStatuses, invoiceList]);

  return (
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>
      <InvoiceListHeader
        activeStatuses={activeStatuses}
        setActiveStauses={setActiveStatuses}
        filteredInvoices={filteredInvoices}
      />
      {invoiceList && (
        <List>
          {filteredInvoices.map((item) => {
            return (
              <InvoiceListItem
                key={item.id}
                item={item}
                invoiceList={invoiceList}
              />
            );
          })}
        </List>
      )}
      {invoiceList.length === 0 && (
        <NoListItems>
          <img src="/illustration-empty.svg" alt="no invoices" />
          <h1>There is nothing here</h1>
          <p>
            Create an invoice by clicking the <br />
            <strong>New Invoice</strong> button and get started
          </p>
        </NoListItems>
      )}
    </Wrapper>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
