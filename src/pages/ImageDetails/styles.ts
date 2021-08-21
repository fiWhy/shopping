import { styled } from '../../styles';
import { Grid } from '../../styles/grid';

export const ImageDetailsWrapperStyled = styled.div``;

export const PopupInnerImageStyled = styled.img`
  width: 100%;
  height: 100%;
`;

export const InnerBlocksStyled = styled(Grid)`
  padding: 0 20px;
`;

export const AuthorBlockStyled = styled(InnerBlocksStyled)`
  height: 50px;
`;

export const MainBlockStyled = styled(InnerBlocksStyled)``;

export const FooterBlockStyled = styled(InnerBlocksStyled)`
  height: 50px;
`;

export const PopupInnerInfoStyled = styled(Grid)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const PopupInnerWrapperStyled = styled(Grid)`
  width: 100%;
  height: 100%;
`;
