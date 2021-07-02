import React from "react";

interface NavButtonType  {
  children: React.ReactNode,
  callback: () => void
}

const NavButton =({ children, callback }:NavButtonType):React.ReactNode =>{
  return (
    <button type="button" onClick={callback}>
      {children}
    </button>
  );
}

export default NavButton;