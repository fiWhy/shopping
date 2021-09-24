import { styled } from '../../styles';
import { Grid } from '../../styles/grid';

export const BadgeWrapperStyled = styled(Grid)`
  border-radius: 30px;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  margin-bottom: 5px;
  cursor: pointer;
  margin-right: 9px;

  &:last-of-type {
    margin-right: 0;
  }
`;
