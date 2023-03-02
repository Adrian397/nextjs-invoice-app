import styled from "styled-components";

export const InvoiceForm = styled.form`
  height: 100%;
  & > div {
    height: 100%;
    padding-right: 2rem;
  }

  input {
    padding: 1.25rem;
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

export const AddItem = styled.div`
  span {
    color: rgba(126, 136, 195, 1);
  }

  button {
    width: 100%;
    color: rgba(126, 136, 195, 1);
    background-color: #f9fafe;
    font-weight: bold;
    border: none;
    height: 3rem;
    border-radius: 20px;
    cursor: pointer;
  }

  button:hover {
    border: none !important;
  }
`;

export const Labels = styled.div`
  margin-bottom: 1rem;

  span {
    display: inline-block;
  }

  span:nth-child(1) {
    width: 13.375rem;
    margin-right: 1rem;
  }

  span:nth-child(2) {
    width: 2.875rem;
    margin-right: 1rem;
  }

  span:nth-child(3) {
    width: 3.5rem;
    margin-right: 3.75rem;
  }

  span:nth-child(4) {
    width: 3.5rem;
  }
`;

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
    border: 1px solid rgba(223, 227, 250, 1);
    border-radius: 4px;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: bold;
    width: 100%;

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
  /* background-color: blue; */

  h2 {
    color: rgba(119, 127, 152, 1);
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;
