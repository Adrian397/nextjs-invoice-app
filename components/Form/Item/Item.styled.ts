import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  input {
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

  span {
    width: 45px;
    display: flex;
    align-items: center;
    margin-right: auto;
  }

  div {
    display: flex;
    align-items: center;
  }

  img:hover {
    cursor: pointer;
    filter: invert(54%) sepia(51%) saturate(5954%) hue-rotate(333deg)
      brightness(104%) contrast(84%);
  }
`;
