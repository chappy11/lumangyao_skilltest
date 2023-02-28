import React, { ReactNode } from "react";
import Navigation from "../Navigation";

type Props = {
  children: ReactNode;
};

export default function PageContainer(props: Props) {
  const { children } = props;
  return (
    <main className=" w-screen h-screen">
      <Navigation />
      {children}
    </main>
  );
}
