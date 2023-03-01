import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Info = styled.div<StyledProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  filter: ${({ activeStatuses }) =>
    activeStatuses
      ? activeStatuses?.length > 0
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        : ""
      : ""};

  transition: filter 120ms ease;

  p {
    color: rgba(136, 142, 176, 1);
    font-weight: 500;
  }
`;

export const H1 = styled.h1<StyledProps>`
  font-weight: 700;
  color: rgba(12, 14, 22, 1);
  letter-spacing: -1px;
  text-shadow: ${({ activeStatuses }) =>
    activeStatuses
      ? activeStatuses?.length > 0
        ? "0px 4px 4px rgba(0, 0, 0, 0.25);"
        : ""
      : ""}; ;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  span {
    color: rgba(12, 14, 22, 1);
  }

  & > button {
    display: flex;
    gap: 1rem;
    align-items: center;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0 2rem;
  }
`;

export const Arrow = styled.img<StyledProps>`
  transform: ${({ isVisible }) =>
    isVisible ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s;
`;

export const Dropdown = styled.div<StyledProps>`
  position: absolute;
  top: 2.5rem;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  padding: 1.5rem;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-1rem)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};
  transition: all 0.3s ease-in-out;

  label {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.8rem;
    width: max-content;

    cursor: pointer;

    &:hover input {
      border: 1px solid rgba(124, 93, 250, 1);
    }

    input {
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      width: 1rem;
      height: 1rem;
      background-color: rgba(223, 227, 250, 1);
      border-radius: 2px;
      display: grid;
      place-content: center;
    }

    input::before {
      content: "";
      width: 1rem;
      height: 1rem;
      background-color: rgba(124, 93, 250, 1);
      background-image: url(/icon-check.svg);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      transform: scale(0);
      transition: transform 120ms ease-in-out;
      border-radius: 2px;
    }

    input:checked::before {
      transform: scale(1);
    }

    span {
      color: rgba(12, 14, 22, 1);
      font-weight: 700;
      font-size: 15px;
      text-transform: capitalize;
    }
  }
`;

export const NewInvoice = styled.button`
  display: flex;
  background-color: rgba(124, 93, 250, 1);
  color: white;
  padding: 0.4rem 0.5rem;
  gap: 0.5rem;
  border-radius: 24px;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    border-radius: 50%;
    background-color: white;
    padding: 0.8rem;
    margin-right: 0.5rem;
  }

  span {
    font-weight: 700;
    margin-right: 1rem;
    font-size: 0.9rem;
  }
`;
