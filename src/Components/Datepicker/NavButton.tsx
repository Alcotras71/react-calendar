import React, { FC } from "react";

interface NavButtonType  {
  children: React.ReactNode,
  callback: () => void
}

const NavButton:FC<NavButtonType> =({ children, callback }) =>{
  return (
    <button type="button" onClick={callback}>
      {children}
    </button>
  );
}

export default NavButton;