import React, { memo, useCallback, VFC } from 'react';
import { useHistory } from 'react-router';
import { Categories } from '../../components';
import { getProductPath } from '../../constants/routes';
import { DashboardProps } from './interfaces';
import { DashboardWrapperStyled, GalleryStyled } from './styles';

const Dashboard: VFC<DashboardProps> = () => {
  const { push } = useHistory();
  const handleProductSelect = useCallback(
    (id: string) => {
      push(getProductPath(id));
    },
    [push]
  );
  return (
    <DashboardWrapperStyled direction={'column'}>
      <Categories />
      <GalleryStyled onSelectProduct={handleProductSelect} />
    </DashboardWrapperStyled>
  );
};

export default memo(Dashboard);
