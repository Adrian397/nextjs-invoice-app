import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};
  transition: all 120ms ease;
`;

export const Panel = styled.div<StyledProps>`
  padding-bottom: 10.75rem;
  display: flex;
  flex-direction: column;
  padding-top: 3.5rem;
  height: 100vh;
  width: 45rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0%)" : "translateX(-100%)"};
  border-radius: 0px 20px 20px 0px;
  background-color: rgba(255, 255, 255, 1);
  transition: transform 0.5s ease;

  input:hover {
    border: 1px solid rgba(146, 119, 255, 1);
  }

  button:not(footer button):hover {
    border: 1px solid rgba(146, 119, 255, 1);
  }

  & > h2 {
    margin-bottom: 2.5rem;
    padding-left: 9.875rem;
    color: #0c0e16;

    span {
      color: #888eb0;
    }
  }
`;
