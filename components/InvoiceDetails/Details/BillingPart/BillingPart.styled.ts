import styled from "styled-components";

export const Billing = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Description = styled.div`
  h3 {
    color: rgba(12, 14, 22, 1);
    margin-bottom: 0.75rem;
    span {
      color: rgba(136, 142, 176, 1);
    }
  }

  p {
    color: rgba(126, 136, 195, 1);
  }
`;

export const SenderAddress = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.3rem;
  grid-column: 4/5;
  color: rgba(126, 136, 195, 1);
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InvoiceDate = styled.div`
  p:nth-of-type(1) {
    color: rgba(126, 136, 195, 1);
    margin-bottom: 0.75rem;
  }

  h3 {
    color: rgba(12, 14, 22, 1);
  }
`;

export const PaymentDue = styled.div`
  p:nth-of-type(1) {
    color: rgba(126, 136, 195, 1);
    margin-bottom: 0.75rem;
  }

  h3 {
    color: rgba(12, 14, 22, 1);
  }
`;

export const Client = styled.div`
  & > p {
    margin-bottom: 0.75rem;
    color: rgba(126, 136, 195, 1);
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`;
export const ClientAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: rgba(126, 136, 195, 1);
`;

export const ClientEmail = styled.div`
  grid-column: span 2;
  p {
    margin-bottom: 0.75rem;
    color: rgba(126, 136, 195, 1);
  }

  h3 {
    color: rgba(12, 14, 22, 1);
  }
`;
