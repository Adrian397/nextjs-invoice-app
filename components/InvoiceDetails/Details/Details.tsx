import { ReactElement } from "react";
import styled from "styled-components";
import { Invoice } from "../../Root/Root.utils";
import { BillingPart } from "./BillingPart/BillingPart";
import { SummaryPart } from "./SummaryPart/SummaryPart";

type Props = {
  invoice?: Invoice;
};

export const Details = ({ invoice }: Props): ReactElement => {
  return (
    <Wrapper>
      <Box>
        <BillingPart invoice={invoice} />
        <SummaryPart invoice={invoice} />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 3rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
