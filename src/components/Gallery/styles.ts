import { styled } from '../../styles';
import { Grid } from '../../styles/grid';

export const ImageStyled = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;

export const ImageWrapperStyled = styled.li`
  height: 40vh;
  flex-grow: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  &:last-child {
    flex-grow: 10;
  }

  @media (max-aspect-ratio: 1/1) {
    height: 30vh;
  }

  @media (max-height: 480px) {
    height: 80vh;
  }
`;

export const ImageListWrapperStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    flex-direction: row;
    ${ImageWrapperStyled} {
      height: auto;
      width: 100%;
    }
    ${ImageStyled} {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }
`;

export const GalleryWrapperStyled = styled(Grid)`
  width: 100%;
  height: 100%;
`;
