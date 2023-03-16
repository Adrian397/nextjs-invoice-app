import { signOut } from "next-auth/react";
import {
  BottomBox,
  Box,
  Logo,
  LogoBox,
  ProfileBox,
  ProfilePicture,
  SignOut,
  SignOutBtn,
} from "./SideBar.styled";

export const SideBar = () => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <Box>
      <LogoBox>
        <Logo src="/logo.svg" />
        <div />
      </LogoBox>
      <BottomBox>
        <SignOut onClick={handleSignOut}>
          <SignOutBtn />
        </SignOut>
        <ProfileBox>
          <ProfilePicture src="/image-avatar.jpg" />
        </ProfileBox>
      </BottomBox>
    </Box>
  );
};
