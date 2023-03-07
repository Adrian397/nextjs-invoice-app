import { EditInvoiceForm } from "@/components/EditInvoiceForm/EditInvoiceForm";
import { Details } from "@/components/InvoiceDetails/Details/Details";
import { Layout } from "@/components/Layout/Layout";
import { Invoice } from "@/components/pagesStylesAndUtils/index/index.utils";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

import {
  GoBack,
  InvoiceDetailsHeader,
  ItemStatus,
  LeftHeaderPart,
  RightHeaderPart,
  Wrapper,
} from "../../components/pagesStylesAndUtils/invoice/invoice.styled";
import type { NextPageWithLayout } from "../_app";

type Props = {
  invoiceList: Invoice[];
};

const InvoiceDetails: NextPageWithLayout<Props> = ({ invoiceList }: Props) => {
  const {
    query: { id },
    back,
  } = useRouter();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const invoice = invoiceList.find((invoice) => id === invoice.id);

  return (
    <Wrapper>
      <Head>
        <title>Invoice</title>
      </Head>
      <GoBack>
        <button onClick={() => back()}>
          <img src="/icon-arrow-left.svg" alt="go back" />
          <span>Go back</span>
        </button>
      </GoBack>
      <InvoiceDetailsHeader>
        <LeftHeaderPart>
          <span>Status</span>
          <ItemStatus status={invoice?.status}>
            <div />
            <span>{invoice?.status}</span>
          </ItemStatus>
        </LeftHeaderPart>
        <RightHeaderPart>
          <button onClick={() => setIsFormVisible(true)}>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </RightHeaderPart>
      </InvoiceDetailsHeader>
      <Details invoice={invoice} />
      {invoice && (
        <EditInvoiceForm
          isFormVisible={isFormVisible}
          invoice={invoice}
          onFormVisibilityChange={setIsFormVisible}
        />
      )}
    </Wrapper>
  );
};

InvoiceDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default InvoiceDetails;
