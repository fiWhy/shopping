import { styled } from '../../styles';
import { Grid } from '../../styles/grid';

export const HeaderWrapperStyled = styled(Grid)`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  max-height: 60px;
  padding: 14px 0;
  flex-wrap: wrap;

  & > div {
    margin-left: 24.5px;
    &:last-of-type {
      margin-right: 24.5px;
    }
  }
`;
