import { StyledProps } from "@/utils/styledProps";
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

export const InputWrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.625rem;

    span {
      font-size: 0.75rem;
      font-weight: 600;
      color: rgba(236, 87, 87, 1);
    }
  }

  label {
    color: ${({ isError }) =>
      isError ? "rgba(236, 87, 87, 1)" : "rgba(126, 136, 195, 1)"};
    font-size: 0.875rem;
  }
  input {
    border: ${({ isError }) =>
      isError
        ? "1px solid rgba(236, 87, 87, 1)"
        : "1px solid rgba(223, 227, 250, 1)"};
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

  h2 {
    color: rgba(119, 127, 152, 1);
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 1rem;
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

export const Error = styled.p`
  color: rgba(236, 87, 87, 1);
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0.5rem;

  &:nth-of-type(1) {
    margin-top: 2rem;
  }
`;
