import React from "react";
import { RoutesType } from "../../../types/RoutesType.type";
type Props = RoutesType;

export default function NavItem(props: Props) {
  return (
    <li
      className=" p-5 text-lg text-yellow-500 hover:text-white cursor-pointer "
      onClick={props.to}
    >
      {props.name}
    </li>
  );
}
