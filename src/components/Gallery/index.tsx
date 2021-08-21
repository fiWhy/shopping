import React, { memo, VFC } from 'react';
import { GalleryImage } from './components';
import { GalleryProps } from './interfaces';
import {
  GalleryWrapperStyled,
  ImageListWrapperStyled,
  ImageWrapperStyled,
} from './styles';

const Gallery: VFC<GalleryProps> = ({ data, onImagePick }) => {
  return (
    <GalleryWrapperStyled>
      <ImageListWrapperStyled>
        {data.map(({ id, src, alt }) => (
          <ImageWrapperStyled key={id}>
            <GalleryImage
              onPick={onImagePick}
              specialId={id}
              src={src}
              alt={alt}
            />
          </ImageWrapperStyled>
        ))}
      </ImageListWrapperStyled>
    </GalleryWrapperStyled>
  );
};

export default memo(Gallery);
