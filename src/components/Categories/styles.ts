import { styled } from '../../styles';
import { Grid } from '../../styles/grid';
import Badge from '../Badge';

export const BadgeStyled = styled(Badge)<{ selected: boolean }>`
  cursor: pointer;

  background-color: ${({ theme, selected }) =>
    selected ? theme.color.lightGray : 'transparent'};
`;

export const CategoriesListWrapperStyled = styled(Grid)`
  flex-wrap: wrap;
`;
export const CategoriesTitleWrapperStyled = styled(Grid)`
  margin-bottom: 16px;
`;
export const CategoriesWrapperStyled = styled(Grid)``;
