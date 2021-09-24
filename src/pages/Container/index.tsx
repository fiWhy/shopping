import { chain, uniqueId } from 'lodash';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Text } from '../../components';
import Cart from '../../components/Cart';
import logo from '../../images/logo.png';
import mockProducts from '../../mocks/products';
import { uploadCategories, uploadProducts } from '../../store/features/market';
import { TextType } from '../../styles';
import { Grid } from '../../styles/grid';
import {
  ActionsWrapperStyled,
  ContainerWrapperStyled,
  LeftPanelInnerWrapperStyled,
  LeftPanelWrapperStyled,
  LogoWrapperStyled,
  RightPanelWrapperStyled,
  SearchStyled,
} from './styles';

export interface RoutesParams {
  dashboard: null;
  imageDetails: {
    id: string;
  };
}

const Container: FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadProducts(mockProducts));
    dispatch(
      uploadCategories(
        chain(mockProducts)
          .map('category')
          .filter()
          .uniq()
          .map((value) => ({
            value,
            id: uniqueId(),
          }))
          .value()
      )
    );
  }, [dispatch]);
  return (
    <ContainerWrapperStyled direction={'row'}>
      <LeftPanelWrapperStyled flex={1} direction={'column'}>
        <Header>
          <LogoWrapperStyled>
            <img src={logo} alt={'logo'} />
          </LogoWrapperStyled>
          <SearchStyled />
          <ActionsWrapperStyled
            flex={1}
            direction={'row'}
            justify={'flex-end'}
            align={'center'}
          >
            Actions
          </ActionsWrapperStyled>
        </Header>
        <LeftPanelInnerWrapperStyled direction={'column'}>
          {children}
        </LeftPanelInnerWrapperStyled>
      </LeftPanelWrapperStyled>
      <RightPanelWrapperStyled direction={'column'}>
        <Grid>
          <Text type={TextType.HEADER_THREE}>Your Cart</Text>
        </Grid>
        <Cart />
      </RightPanelWrapperStyled>
    </ContainerWrapperStyled>
  );
};

export default Container;
