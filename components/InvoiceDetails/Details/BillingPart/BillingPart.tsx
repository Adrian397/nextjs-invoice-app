import { Invoice } from "@/components/Index/index.utils";
import { options } from "@/utils/dateFormat";
import { ReactElement } from "react";
import {
  Billing,
  Client,
  ClientAddress,
  ClientEmail,
  Dates,
  Description,
  InvoiceDate,
  PaymentDue,
  SenderAddress,
} from "./BillingPart.styled";

type Props = {
  invoice?: Invoice;
};

export const BillingPart = ({ invoice }: Props): ReactElement => {
  return (
    <Billing>
      <Description>
        <h3>
          <span>#</span>
          {invoice?.id}
        </h3>
        <p>{invoice?.description}</p>
      </Description>
      <SenderAddress>
        <p>{invoice?.senderAddress.street}</p>
        <p>{invoice?.senderAddress.city}</p>
        <p>{invoice?.senderAddress.postCode}</p>
        <p>{invoice?.senderAddress.country}</p>
      </SenderAddress>
      <Dates>
        <InvoiceDate>
          <p>Invoice Date</p>
          <h3>
            {new Date(invoice ? invoice?.createdAt : "").toLocaleString(
              "en-UK",
              options
            )}
          </h3>
        </InvoiceDate>
        <PaymentDue>
          <p>Payment Due</p>
          <h3>
            {new Date(invoice ? invoice?.paymentDue : "").toLocaleString(
              "en-UK",
              options
            )}
          </h3>
        </PaymentDue>
      </Dates>

      <Client>
        <p>Bill to</p>
        <h3>{invoice?.clientName}</h3>
        <ClientAddress>
          <p>{invoice?.clientAddress.street}</p>
          <p>{invoice?.clientAddress.city}</p>
          <p>{invoice?.clientAddress.postCode}</p>
          <p>{invoice?.clientAddress.country}</p>
        </ClientAddress>
      </Client>
      <ClientEmail>
        <p>Sent to</p>
        <h3>{invoice?.clientEmail}</h3>
      </ClientEmail>
    </Billing>
  );
};
