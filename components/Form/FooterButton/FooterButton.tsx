import { ReactElement, ReactNode } from "react";
import { Button } from "./FooterButton.styled";

type Props = {
  children: ReactNode;
  bgColor: string;
  txtColor: string;
  type: "button" | "submit";
};

export const FooterButton = ({
  children,
  bgColor,
  txtColor,
  type,
}: Props): ReactElement => {
  return (
    <Button type={type} txtColor={txtColor} bgColor={bgColor}>
      {children}
    </Button>
  );
};
