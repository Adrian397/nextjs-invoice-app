import { InvoiceListHeader } from "@/components/InvoiceList/InvoiceListHeader/InvoiceListHeader";
import InvoiceListItem from "@/components/InvoiceList/InvoiceListItem/InvoiceListItem";
import { useMemo, useState } from "react";
import { List, NoListItems, Wrapper } from "./index.styled";
import { Invoice } from "./index.utils";

type Props = {
  invoiceList: Invoice[];
};

export default function Home({ invoiceList }: Props) {
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
}
