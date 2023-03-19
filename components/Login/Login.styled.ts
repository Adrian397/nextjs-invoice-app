import { StyledProps } from "@/utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginForm = styled.form<StyledProps>`
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
      border-color: ${({ errors, isError }) =>
        errors?.email || isError ? "red" : "#dbdeea"};
    }
  }

  div:nth-of-type(2) {
    margin-bottom: ${({ isError }) => (isError ? "0.375rem" : "2rem")};

    input {
      border-color: ${({ errors, isError }) =>
        errors?.password || isError ? "red" : "#dbdeea"};
      margin-bottom: ${({ isError }) => (isError ? "0.5rem" : "")};
    }

    p {
      color: red;
      font-size: 14px;
      display: flex;
      align-items: center;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 0.5rem;
      }
    }
  }

  div:nth-of-type(3) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 1.5rem;

    p {
      background-color: rgba(248, 248, 251, 1);
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  div:nth-of-type(3)::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    background-color: black;
    z-index: -1337;
  }
`;

export const LoginBtn = styled.button<StyledProps>`
  width: 100%;
  cursor: pointer;
  padding: ${({ isLoading }) => (isLoading ? "0.2rem 0rem" : "0.5rem 0rem")};
  margin-bottom: 1.5rem;
  background-color: #825db3;
  background-color: ${({ isLoading }) =>
    isLoading ? "rgba(130, 93, 179, 0.7)" : "rgba(130, 93, 179, 1)"};
  border: none;
  color: white;
  font-weight: 700;
`;

export const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border: 1px solid #dbdeea;
  background-color: white;
  padding: 0.5rem 0rem;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 14px;

  img {
    margin-left: 0.5rem;
  }
`;
export const GithubBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border: 1px solid #dbdeea;
  background-color: white;
  padding: 0.5rem 0rem;
  margin-bottom: 2rem;
  width: 100%;
  font-size: 14px;

  img {
    margin-left: 0.5rem;
  }
`;

export const RegisterLink = styled.p`
  color: #333;

  a {
    color: #825db3;
    font-weight: 700;
  }
`;
