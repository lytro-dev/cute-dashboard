import React from "react";
import { MenuAsideItem } from "../../../_interfaces";
import AsideMenuItem from "./Item";

type Props = {
  menu: MenuAsideItem[];
  isDropdownList?: boolean;
  className?: string;
  onRouteChange: () => void;
  closeAllDropdowns?: () => void;
};

export default function AsideMenuList({
  menu,
  isDropdownList = false,
  className = "",
  closeAllDropdowns,
  ...props
}: Props) {
  return (
    <ul className={className}>
      {menu.map((item, index) => (
        <AsideMenuItem
          key={index}
          item={item}
          isDropdownList={isDropdownList}
          onRouteChange={props.onRouteChange}
          closeAllDropdowns={closeAllDropdowns}
        />
      ))}
    </ul>
  );
}
