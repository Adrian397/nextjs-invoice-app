import {
  BottomBox,
  Box,
  Logo,
  LogoBox,
  ProfileBox,
  ProfilePicture,
  ThemeBox,
  ThemeSwitch,
} from "./SideBar.styled";

export const SideBar = () => {
  return (
    <Box>
      <LogoBox>
        <Logo src="/logo.svg" />
        <div />
      </LogoBox>
      <BottomBox>
        <ThemeBox>
          <ThemeSwitch src="/icon-moon.svg" />
        </ThemeBox>
        <ProfileBox>
          <ProfilePicture src="/image-avatar.jpg" />
        </ProfileBox>
      </BottomBox>
    </Box>
  );
};
