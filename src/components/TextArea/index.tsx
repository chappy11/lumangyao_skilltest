import React from "react";
type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export default function TextArea(props: Props) {
  return (
    <textarea
      rows={15}
      {...props}
      className=" p-5 border border-slate-600 outline-none focus:border-yellow-500 w-full"
    />
  );
}
