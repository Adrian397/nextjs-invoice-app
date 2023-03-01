import { Invoice } from "@/pages/index.utils";
import { Fragment, ReactElement } from "react";
import { Amount, Items, Summary, SumUp } from "./SummaryPart.styled";

type Props = {
  invoice?: Invoice;
};

export const SummaryPart = ({ invoice }: Props): ReactElement => {
  const totalArr = invoice?.items.map((item) => item.total);

  const total = totalArr?.reduce(
    (prevValue, currValue) => prevValue + currValue
  );

  return (
    <Summary>
      <SumUp>
        <Items>
          <p>Item Name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
          {invoice?.items.map((item, index) => (
            <Fragment key={index}>
              <h3>{item.name}</h3>
              <span>{item.quantity}</span>
              <span>
                £{" "}
                {item.price.toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </span>
              <span>
                £{" "}
                {item.total.toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </Fragment>
          ))}
        </Items>
      </SumUp>
      <Amount>
        <span>Amount Due</span>
        <h1>
          £{" "}
          {total?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </h1>
      </Amount>
    </Summary>
  );
};
