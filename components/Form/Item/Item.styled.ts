import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

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
