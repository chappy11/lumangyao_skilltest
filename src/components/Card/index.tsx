import { title } from "process";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Card(props: Props) {
  return (
    <div className=" m-auto bg-white shadow-md w-full">
      {/* header */}
      <div className=" w-full p-5 bg-slate-700 text-white">
        <p className=" text-3xl">{props.title}</p>
      </div>
      <div className=" p-5">{props.children}</div>
    </div>
  );
}
