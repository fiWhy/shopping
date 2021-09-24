import React, { memo, VFC } from 'react';
import { ButtonProps } from './interfaces';
import { ButtonWrapperStyled } from './styles';

const Button: VFC<ButtonProps> = ({ children, ...otherProps }) => {
  return <ButtonWrapperStyled {...otherProps}>{children}</ButtonWrapperStyled>;
};

export default memo(Button);
