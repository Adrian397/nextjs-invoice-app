import { Details } from "@/components/InvoiceDetails/Details/Details";
import { useRouter } from "next/router";
import { Invoice } from "../index.utils";
import {
  GoBack,
  InvoiceDetailsHeader,
  ItemStatus,
  LeftHeaderPart,
  RightHeaderPart,
  Wrapper,
} from "./[id].styled";

type Props = {
  invoiceList: Invoice[];
};

export default function InvoiceDetails({ invoiceList }: Props) {
  const {
    query: { id },
    back,
  } = useRouter();

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
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </RightHeaderPart>
      </InvoiceDetailsHeader>
      <Details invoice={invoice} />
    </Wrapper>
  );
}
