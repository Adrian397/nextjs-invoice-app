import { SideBar } from "../SideBar/SideBar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};
