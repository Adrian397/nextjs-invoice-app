import styled from "styled-components";

export const InvoiceForm = styled.form`
  height: 100%;
  & > div {
    height: 100%;
    padding-right: 2rem;
  }
`;

export const Scroll = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-right: 1.5rem;
  scrollbar-color: rgba(223, 227, 250, 1) white;
  scrollbar-width: thin;
  padding-left: 9.875rem;

  &::-webkit-scrollbar {
    background-color: white;
    width: 0.6rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(223, 227, 250, 1);
    border-radius: 4px;
  }
`;

export const Box = styled.div`
  width: 100%;

  & > div:nth-of-type(1) {
    display: flex;
    width: 100%;
    gap: 24px;
  }
`;

export const AddList = styled.div``;

export const InputWrapper = styled.div`
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

export const ItemList = styled.div`
  width: 100%;
  background-color: blue;

  h2 {
    color: rgba(119, 127, 152, 1);
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4.1rem 2rem 9.875rem;
  border-radius: 0px 20px 20px 0px;
  background-color: white;
  position: fixed;
  bottom: 0;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;
