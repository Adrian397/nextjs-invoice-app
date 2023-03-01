import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const ListItem = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  height: 4.5rem;
  padding: 0 1.5rem 0 1.8rem;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid rgba(124, 93, 250, 1);
  }
`;

export const LeftItemProps = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

export const RightItemProps = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 0.75rem;
    width: 0.5rem;
    margin-left: 1.5rem;
  }
`;

export const ItemId = styled.span`
  width: 4rem;

  span:nth-of-type(1) {
    color: rgba(126, 136, 195, 1);
    font-weight: bold;
  }

  span:nth-of-type(2) {
    color: rgba(12, 14, 22, 1);
    font-weight: 700;
  }
`;

export const ItemDate = styled.span`
  width: 7.5rem;

  span:nth-of-type(1) {
    color: rgba(136, 142, 176, 1);
    font-weight: 500;
    margin-right: 0.3rem;
  }

  span:nth-of-type(2) {
    color: rgba(126, 136, 195, 1);
    font-weight: 500;
  }
`;

export const ItemName = styled.span`
  color: rgba(133, 139, 178, 1);
`;

export const ItemTotal = styled.span`
  color: rgba(12, 14, 22, 1);
  font-weight: 700;
  font-size: 1.2rem;
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
  margin-left: 2.5rem;

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
