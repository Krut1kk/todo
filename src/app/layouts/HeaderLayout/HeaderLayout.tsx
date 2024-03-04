// widgets
import { Header } from "@/widgets/Header";
// react
import { Outlet } from "react-router-dom";

export const HeaderLayout = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
