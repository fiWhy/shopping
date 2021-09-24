import React, { FormEvent, memo, useCallback, VFC } from 'react';
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
  ProductInfoWrapperStyled,
  ProductWrapperStyled,
} from '../styles';

const Product: VFC<ProductProps> = ({ data, onDelete, onChange }) => {
  const { amount, product } = data;
  const currency = useSelector<State, Currency>(
    (state) => state.market.currency
  );
  const {
    productId: { value },
  } = product;

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      onChange(value, Number(e.currentTarget.value));
    },
    [onChange, value]
  );

  const handleDelete = useCallback(() => {
    onDelete(value);
  }, [onDelete, value]);

  return (
    <ProductWrapperStyled direction={'row'}>
      <ProductImageWrapperStyled>
        <ProductImageStyled src={product.imageUrl} alt={product.name} />
      </ProductImageWrapperStyled>
      <ProductInfoWrapperStyled flex={1} direction={'column'}>
        <Grid>
          <Text type={TextType.CONTENT}>{product.name}</Text>
        </Grid>
        <Grid>
          {currency.sign}
          {product.price * amount}
        </Grid>
      </ProductInfoWrapperStyled>
      <ProductActionsWrapperStyled justifySelf={'flex-end'}>
        <input
          onInput={handleChange}
          step={product.stepSize}
          value={String(amount)}
          type="number"
        />
        <Button onClick={handleDelete}>Delete</Button>
      </ProductActionsWrapperStyled>
    </ProductWrapperStyled>
  );
};

export default memo(Product);
