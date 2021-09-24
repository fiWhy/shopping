import React, { FC, memo } from 'react';
import { HeaderProps } from './interfaces';
import { HeaderWrapperStyled } from './styles';

const Header: FC<HeaderProps> = ({ children }) => {
  return <HeaderWrapperStyled>{children}</HeaderWrapperStyled>;
};

export default memo(Header);
