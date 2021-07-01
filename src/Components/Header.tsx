import React, { FC } from 'react';

interface PropsType {
  publish: string
}

const Header: FC<PropsType> = ({ publish }) => {
  return (
    <div> {publish}</div>
  )
}

export default Header;