import React, { useMemo } from "react";
import { Routes } from "../../types/Routes.enum";
import { RoutesType } from "../../types/RoutesType.type";
import NavItem from "./NavItem";

const NAVS: RoutesType[] = [
  {
    name: "A Way Too Long Word",
    path: Routes.A_WAY_TOO_LONG_WORDS,
    to: () => (window.location.href = Routes.A_WAY_TOO_LONG_WORDS),
  },
  {
    name: "Boy or Girls",
    path: Routes.BOY_OR_GIRL,
    to: () => (window.location.href = Routes.BOY_OR_GIRL),
  },
  {
    name: "Magnet",
    path: Routes.MAGNET,
    to: () => (window.location.href = Routes.MAGNET),
  },
  {
    name: "Word",
    path: Routes.WORD,
    to: () => (window.location.href = Routes.WORD),
  },
];

export default function Navigation() {
  const displayNavItem = useMemo(() => {
    return NAVS.map((val, i) => (
      <NavItem to={val.to} name={val.name} path={val.path} key={i.toString()} />
    ));
  }, [NAVS]);

  return (
    <nav className=" bg-slate-900 w-screen">
      <ul className=" flex w-full">{displayNavItem}</ul>
    </nav>
  );
}
