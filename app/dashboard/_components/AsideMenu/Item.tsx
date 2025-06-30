"use client";

import React, { useEffect, useRef, useState } from "react";
import { mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "../../../_components/Icon";
import Link from "next/link";
import { getButtonColor } from "../../../_lib/colors";
import AsideMenuList from "./List";
import { MenuAsideItem } from "../../../_interfaces";
import { usePathname } from "next/navigation";

type Props = {
  item: MenuAsideItem;
  onRouteChange: () => void;
  isDropdownList?: boolean;
  closeAllDropdowns?: () => void;
};

const AsideMenuItem = ({ item, isDropdownList = false, closeAllDropdowns, ...props }: Props) => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const activeClassAddon =
    !item.color && isLinkActive ? "aside-menu-item-active font-bold" : "";

  const pathname = usePathname();

  useEffect(() => {
    setIsLinkActive(item.href === pathname);
  }, [item.href, pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isDropdownActive) return;
    function handleClickOutside(event: MouseEvent) {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsDropdownActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownActive]);

  // Helper to close dropdown and call onRouteChange
  const handleRouteChangeAndClose = () => {
    setIsDropdownActive(false);
    if (closeAllDropdowns) closeAllDropdowns();
    props.onRouteChange();
  };

  const asideMenuItemInnerContents = (
    <>
      {item.icon && (
        <Icon
          path={item.icon}
          className={`flex-none ${activeClassAddon}`}
          w="w-16"
          size="18"
        />
      )}
      <span
        className={`grow text-ellipsis line-clamp-1 ${
          item.menu ? "" : "pr-12"
        } ${activeClassAddon}`}
      >
        {item.label}
      </span>
      {item.menu && (
        <Icon
          path={isDropdownActive ? mdiMinus : mdiPlus}
          className={`flex-none ${activeClassAddon}`}
          w="w-12"
        />
      )}
    </>
  );

  const componentClass = [
    "flex cursor-pointer",
    isDropdownList ? "py-3 px-6 text-sm" : "py-3",
    item.color
      ? getButtonColor(item.color, false, true)
      : `aside-menu-item dark:text-slate-300 dark:hover:text-white`,
  ].join(" ");

  return (
    <li>
      {item.href && (
        <Link
          href={item.href}
          target={item.target}
          className={componentClass}
          onClick={handleRouteChangeAndClose}
        >
          {asideMenuItemInnerContents}
        </Link>
      )}
      {!item.href && (
        <div
          ref={itemRef}
          className={componentClass}
          onClick={() => setIsDropdownActive(!isDropdownActive)}
        >
          {asideMenuItemInnerContents}
        </div>
      )}
      {item.menu && (
        <AsideMenuList
          menu={item.menu}
          className={`aside-menu-dropdown ${
            isDropdownActive ? "block dark:bg-slate-800/50" : "hidden"
          }`}
          onRouteChange={props.onRouteChange}
          isDropdownList
          closeAllDropdowns={() => {
            setIsDropdownActive(false);
            if (closeAllDropdowns) closeAllDropdowns();
          }}
        />
      )}
    </li>
  );
};

export default AsideMenuItem;
