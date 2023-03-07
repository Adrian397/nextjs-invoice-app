import { Invoice } from "@/components/pagesStylesAndUtils/index/index.utils";
import { options } from "@/utils/dateFormat";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import {
  ItemDate,
  ItemId,
  ItemName,
  ItemStatus,
  ItemTotal,
  LeftItemProps,
  ListItem,
  RightItemProps,
} from "./InvoiceListItem.styled";

type Props = {
  item: Invoice;
  invoiceList: Invoice[];
};

const InvoiceListItem = ({ item, invoiceList }: Props): ReactElement => {
  const router = useRouter();
  const handleInvoicePreview = (id: string) => {
    const invoice = invoiceList.find((invoice) => invoice.id === id);
    if (invoice) {
      router.push(`/invoice/${invoice.id}`);
    }
  };

  return (
    <ListItem onClick={() => handleInvoicePreview(item.id)}>
      <LeftItemProps>
        <ItemId>
          <span>#</span>
          <span>{item.id}</span>
        </ItemId>
        <ItemDate>
          <span>Due</span>
          <span>
            {new Date(item.paymentDue).toLocaleString("en-UK", options)}
          </span>
        </ItemDate>
        <ItemName>{item.clientName}</ItemName>
      </LeftItemProps>
      <RightItemProps>
        <ItemTotal>
          £ {item.total.toLocaleString("en", { minimumFractionDigits: 2 })}
        </ItemTotal>
        <ItemStatus status={item.status}>
          <div />
          <span>{item.status}</span>
        </ItemStatus>
        <img src={"/icon-arrow-right.svg"} alt="arrow" />
      </RightItemProps>
    </ListItem>
  );
};

export default InvoiceListItem;
