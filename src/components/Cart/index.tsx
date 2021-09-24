import React, { memo, useCallback, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../interfaces/cart';
import { State } from '../../store';
import { changeProductSize, deleteProduct } from '../../store/features/cart';
import Product from './components/Product';
import { CartProps } from './interfaces';
import { CartWrapperStyled } from './styles';

const Cart: VFC<CartProps> = () => {
  const dispatch = useDispatch();
  const products = useSelector<State, CartItem[]>(
    (state) => state.cart.products
  );

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  const handleChangeSize = useCallback(
    (id: string, value: number) => {
      dispatch(
        changeProductSize({
          id,
          value,
        })
      );
    },
    [dispatch]
  );

  return (
    <CartWrapperStyled direction={'column'}>
      {products.map((p) => (
        <Product
          onDelete={handleDelete}
          onChange={handleChangeSize}
          data={p}
          key={p.product.productId.value}
        />
      ))}
    </CartWrapperStyled>
  );
};

export default memo(Cart);
