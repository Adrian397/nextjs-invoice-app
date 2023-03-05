import { EditInvoiceForm } from "@/components/EditInvoiceForm/EditInvoiceForm";
import { Details } from "@/components/InvoiceDetails/Details/Details";
import { Invoice } from "@/components/pagesStylesUtils/index/index.utils";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  GoBack,
  InvoiceDetailsHeader,
  ItemStatus,
  LeftHeaderPart,
  RightHeaderPart,
  Wrapper,
} from "../../components/pagesStylesUtils/invoice/invoice.styled";

type Props = {
  invoiceList: Invoice[];
};

export default function InvoiceDetails({ invoiceList }: Props) {
  const {
    query: { id },
    back,
  } = useRouter();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const invoice = invoiceList.find((invoice) => id === invoice.id);

  return (
    <Wrapper>
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
}
