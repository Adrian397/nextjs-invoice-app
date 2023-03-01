import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const Button = styled.button<StyledProps>`
  padding: 1rem 1.5rem;
  border-radius: 24px;
  border: currentColor;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ txtColor }) => txtColor};
  cursor: pointer;
`;
