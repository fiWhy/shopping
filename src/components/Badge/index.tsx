import React, { FC, memo } from 'react';
import { Text } from '..';
import { TextType } from '../../styles';
import { BadgeProps } from './interfaces';
import { BadgeWrapperStyled } from './styles';

const Badge: FC<BadgeProps> = ({ children, onSelect, className }) => {
  return (
    <BadgeWrapperStyled className={className} onClick={() => onSelect()}>
      <Text type={TextType.DEFAULT}>{children}</Text>
    </BadgeWrapperStyled>
  );
};

export default memo(Badge);
