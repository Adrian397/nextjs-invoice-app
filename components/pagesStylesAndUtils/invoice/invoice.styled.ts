import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 60rem;
  margin: 5rem auto 0 auto;
  display: flex;
  flex-direction: column;
`;

export const GoBack = styled.div`
  margin-bottom: 3rem;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    margin-right: 1rem;
  }

  span {
    color: rgba(12, 14, 22, 1);
    font-weight: bold;
    font-size: 15px;
  }
`;

export const InvoiceDetailsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  height: 5.5rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 0 2rem;
  margin-bottom: 2rem;

  & > span {
    color: rgba(133, 139, 178, 1);
    font-weight: 500;
  }
`;

export const ItemStatus = styled.div<StyledProps>`
  text-transform: capitalize;
  background-color: ${({ status }) =>
    status === "paid"
      ? "rgba(51, 214, 159, 0.06)"
      : status === "pending"
      ? "rgba(255, 143, 0, 0.06)"
      : status === "draft"
      ? "rgba(55, 59, 83, 0.06)"
      : ""};
  color: ${({ status }) =>
    status === "paid"
      ? "rgba(51, 214, 159, 1)"
      : status === "pending"
      ? "rgba(255, 143, 0, 1)"
      : status === "draft"
      ? "rgba(55, 59, 83, 1)"
      : ""};
  border-radius: 6px;
  height: 2.5rem;
  width: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ status }) =>
      status === "paid"
        ? "rgba(51, 214, 159, 1)"
        : status === "pending"
        ? "rgba(255, 143, 0, 1)"
        : status === "draft"
        ? "rgba(55, 59, 83, 1)"
        : ""};
  }
`;

export const LeftHeaderPart = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  & > span {
    color: rgba(133, 139, 178, 1);
    font-weight: 500;
  }
`;

export const RightHeaderPart = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button {
    padding: 1rem;
    border-radius: 24px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.25px;
    cursor: pointer;

    &:nth-of-type(1) {
      background-color: rgba(249, 250, 254, 1);
      color: rgba(126, 136, 195, 1);
    }

    &:nth-of-type(2) {
      background-color: rgba(236, 87, 87, 1);
      color: white;
    }

    &:nth-of-type(3) {
      background-color: rgba(124, 93, 250, 1);
      color: white;
    }
  }
`;
