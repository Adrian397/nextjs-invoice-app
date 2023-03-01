import styled from "styled-components";

export const WideInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;

  label {
    color: rgba(126, 136, 195, 1);
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }
  input {
    padding-left: 1.25rem;
    border: 1px solid rgba(223, 227, 250, 1);
    border-radius: 4px;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: bold;
    width: 100%;
    color: rgba(12, 14, 22, 1);

    &::placeholder {
      color: rgba(12, 14, 22, 1);
      opacity: 0.4;
    }

    &:focus-visible {
      outline-color: rgba(146, 119, 255, 1);
    }
  }
`;

export const NarrowInputs = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;

export const NarrowInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: rgba(126, 136, 195, 1);
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }
  input {
    width: 100%;
    padding-left: 1.25rem;
    border: 1px solid rgba(223, 227, 250, 1);
    border-radius: 4px;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: rgba(12, 14, 22, 1);

    &:focus-visible {
      outline-color: rgba(146, 119, 255, 1);
    }
  }
`;
