import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 6.5rem;
  background-color: #373b53;
  border-radius: 0 20px 20px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1337;
`;

export const LogoBox = styled.div`
  height: 6.5rem;
  width: 100%;
  background-color: #7c5dfa;
  position: relative;
  border-radius: 0 20px 20px 0;
  display: flex;

  div {
    height: 50%;
    width: 100%;
    background-color: #9277ff;
    border-radius: 20px 0 20px 0;
    margin-top: auto;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 37px;
  transform: translate(-50%, -50%);
`;

export const BottomBox = styled.div`
  height: 12rem;
`;

export const SignOut = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignOutBtn = styled.button`
  background: transparent url("/logout.png") no-repeat center;
  background-size: 24px;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  border-top: 1px solid #494e6e;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
