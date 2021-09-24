import { Search } from '../../components';
import { styled } from '../../styles';
import { Grid } from '../../styles/grid';

export const ContainerWrapperStyled = styled(Grid)`
  height: 100%;
  width: 100%;
`;

export const LeftPanelInnerWrapperStyled = styled(Grid)`
  padding: 26px 100px;
`;

export const LeftPanelWrapperStyled = styled(Grid)``;

export const RightPanelWrapperStyled = styled(Grid)`
  width: 30%;
  border-left: 1px solid ${({ theme }) => theme.color.lightGray};
`;

export const LogoWrapperStyled = styled(Grid)``;

export const ActionsWrapperStyled = styled(Grid)``;

export const SearchStyled = styled(Search)`
  width: 50%;
`;
