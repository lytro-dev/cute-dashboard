import React from "react";
import { MenuNavBarItem } from "../../../_interfaces";
import NavBarItem from "./Item";

type Props = {
  menu: MenuNavBarItem[];
  onRouteChange: () => void;
  openDropdown: string | null;
  setOpenDropdown: (key: string | null) => void;
};

export default function NavBarMenuList({ menu, openDropdown, setOpenDropdown, ...props }: Props) {
  return (
    <>
      {menu.map((item, index) => (
        <NavBarItem
          key={index}
          item={item}
          onRouteChange={props.onRouteChange}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      ))}
    </>
  );
}
