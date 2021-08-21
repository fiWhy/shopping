import React, { memo, MouseEvent, useCallback, VFC } from 'react';
import { GalleryImageProps } from '../interfaces';
import { ImageStyled } from '../styles';

const GalleryImage: VFC<GalleryImageProps> = ({
  onPick,
  specialId,
  onClick,
  ...props
}) => {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLImageElement>) => {
      if (onPick) {
        onPick(specialId);
      }
      if (onClick) {
        onClick(e);
      }
    },
    [onPick, onClick, specialId]
  );

  return <ImageStyled {...props} onClick={handleClick} />;
};

export default memo(GalleryImage);
