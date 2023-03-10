import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;

  label {
    color: rgba(126, 136, 195, 1);
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }
  & > button {
    background: none;
    border: 1px solid rgba(223, 227, 250, 1);
    border-radius: 4px;
    height: 3rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    cursor: pointer;
    font-weight: bold;
    color: rgba(12, 14, 22, 1);

    &:focus-visible {
      outline-color: rgba(146, 119, 255, 1);
    }
  }

  & > div {
    position: absolute;
    top: 5rem;
    width: 100%;
    z-index: 2;

    button:hover {
      border: none !important;
    }
  }
`;
