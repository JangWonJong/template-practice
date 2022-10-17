import React from "react";
import NavBar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="w-full p-0">
      <NavBar />
      {props.children}
    </div>
  );
}