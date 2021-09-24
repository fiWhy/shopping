import React, { memo, useCallback, VFC } from 'react';
import { useSelector } from 'react-redux';
import { Button, Text } from '../..';
import { Currency } from '../../../interfaces/currency';
import { State } from '../../../store';
import { TextType } from '../../../styles';
import { Grid } from '../../../styles/grid';
import { ProductProps } from '../interfaces';
import {
  ProductActionsWrapperStyled,
  ProductImageStyled,
  ProductImageWrapperStyled,
  ProductWrapperStyled,
} from '../styles';

const Product: VFC<ProductProps> = ({ data, onAdd, onSelect }) => {
  const currency = useSelector<State, Currency>(
    (state) => state.market.currency
  );
  const handleAdd = useCallback(() => {
    onAdd();
  }, [onAdd]);
  return (
    <ProductWrapperStyled direction={'column'}>
      <ProductImageWrapperStyled onClick={onSelect}>
        <ProductImageStyled src={data.imageUrl} alt={data.name} />
      </ProductImageWrapperStyled>
      <Grid>
        <Text type={TextType.CONTENT}>{data.name}</Text>
      </Grid>
      <Grid>
        {currency.sign}
        {data.price}
      </Grid>
      <ProductActionsWrapperStyled justifySelf={'flex-end'}>
        <Button onClick={handleAdd}>Add to Cart</Button>
      </ProductActionsWrapperStyled>
    </ProductWrapperStyled>
  );
};

export default memo(Product);
