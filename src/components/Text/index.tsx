import React, { FC, memo, useMemo } from 'react';
import { TextType } from '../../styles';
import { TextProps } from './interfaces';
import { TextHeaderThreeWrapperStyled, TextWrapperStyled } from './styles';

const Text: FC<TextProps> = ({ children, ...otherProps }) => {
  const { type } = otherProps;
  const TextComponent = useMemo(() => {
    switch (type) {
      case TextType.CONTENT:
      case TextType.DEFAULT:
        return TextWrapperStyled;

      case TextType.HEADER_THREE:
        return TextHeaderThreeWrapperStyled;

      default:
        return TextWrapperStyled;
    }
  }, [type]);

  return <TextComponent {...otherProps}>{children}</TextComponent>;
};

export default memo(Text);
