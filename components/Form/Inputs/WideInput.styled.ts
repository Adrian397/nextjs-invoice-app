import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const WideWrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;

  label {
    color: ${({ isValid }) =>
      isValid ? "rgba(126, 136, 195, 1)" : "rgba(236, 87, 87, 1)"};
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }
  input {
    padding-left: 1.25rem;
    border: ${({ isValid }) =>
      isValid
        ? "1px solid rgba(223, 227, 250, 1)"
        : "1px solid rgba(236, 87, 87, 1)"};
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
