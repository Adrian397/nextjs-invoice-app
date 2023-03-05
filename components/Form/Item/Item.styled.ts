import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  /* input {
    border: 1px solid rgba(223, 227, 250, 1);
    height: 3rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: bold;
    color: rgba(12, 14, 22, 1);
  }

  input:focus-visible {
    outline-color: rgba(146, 119, 255, 1);
  }

  input:nth-child(1) {
    width: 214px;
    margin-right: 1rem;
  }

  input:nth-child(2) {
    width: 46px;
    padding: 0.7rem;
    margin-right: 1rem;
  }
  input:nth-child(3) {
    width: 100px;
    margin-right: 1rem;
  }

  input:nth-child(4) {
    width: 45px;
    padding: 0rem;
    margin-right: auto;
    background-color: transparent;
    border: none;
    outline: none;
  }

  input:nth-child(4):hover {
    border: none;
  } */

  div {
    display: flex;
    align-items: center;
  }

  button {
    width: 13px;
    height: 20px;
    background: transparent url(/icon-delete.svg) no-repeat center;
    background-size: 13px;
  }

  button:hover {
    filter: invert(54%) sepia(51%) saturate(5954%) hue-rotate(333deg)
      brightness(104%) contrast(84%);
  }
`;

export const Field = styled.input<StyledProps>`
  border: ${({ isError }) =>
    isError
      ? "1px solid rgba(236, 87, 87, 1)"
      : "1px solid rgba(223, 227, 250, 1)"};
  height: 3rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: bold;
  color: rgba(12, 14, 22, 1);

  &:focus-visible {
    outline-color: rgba(146, 119, 255, 1);
  }

  &:nth-child(1) {
    width: 214px;
    margin-right: 1rem;
  }

  &:nth-child(2) {
    width: 46px;
    padding: 0.7rem;
    margin-right: 1rem;
  }
  &:nth-child(3) {
    width: 100px;
    margin-right: 1rem;
  }

  &:nth-child(4) {
    width: 45px;
    padding: 0rem;
    margin-right: auto;
    background-color: transparent;
    border: none;
    outline: none;
  }

  &:nth-child(4):hover {
    border: none;
  }
`;
