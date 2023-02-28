import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function TextInput(props: Props) {
  return (
    <input
      {...props}
      className=" p-3 w-full border border-slate-700 outline-none focus:border-yellow-500"
    />
  );
}
