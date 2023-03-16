import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RegisterForm = styled.form<StyledProps>`
  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 700;
    }

    input {
      width: 15rem;
      height: 2rem;
      padding: 0rem 0.5rem;
      border: 1px solid #dbdeea;
      outline: none;
    }
  }

  div:nth-of-type(1) {
    margin-bottom: 1rem;

    input {
      border-color: ${({ errors }) => (errors?.email ? "red" : "#dbdeea")};
    }
  }

  div:nth-of-type(2) {
    margin-bottom: 1rem;

    input {
      border-color: ${({ errors }) => (errors?.username ? "red" : "#dbdeea")};
    }
  }

  div:nth-of-type(3) {
    margin-bottom: 2rem;

    input {
      border-color: ${({ errors }) => (errors?.password ? "red" : "#dbdeea")};
    }
  }
`;

export const RegisterBtn = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 0.5rem 0rem;
  margin-bottom: 1.5rem;
  background-color: #825db3;
  border: none;
  color: white;
  font-weight: 700;
`;

export const RegisterLink = styled.p`
  color: #333;

  a {
    color: #825db3;
    font-weight: 700;
  }
`;
