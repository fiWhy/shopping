import { styled } from '../../styles';
import { Grid } from '../../styles/grid';

export const ProductActionsWrapperStyled = styled(Grid)``;

export const ProductImageStyled = styled.img`
  width: 100%;
`;

export const ProductImageWrapperStyled = styled(Grid)`
  height: 154px;
  cursor: pointer;
`;

export const ProductWrapperStyled = styled(Grid)`
  min-width: 200px;
  width: 200px;
  height: 273px;
`;

export const GalleryWrapperStyled = styled(Grid)`
  flex-wrap: wrap;
  & > div {
    margin: 12px 44px;
  }
`;
