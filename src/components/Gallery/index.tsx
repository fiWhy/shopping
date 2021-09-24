import { map } from 'lodash';
import React, { memo, useCallback, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product as IProduct } from '../../interfaces/product';
import { State } from '../../store';
import { addProduct } from '../../store/features/cart';
import Product from './components/Product';
import { GalleryProps } from './interfaces';
import { GalleryWrapperStyled } from './styles';

const Gallery: VFC<GalleryProps> = ({ className, onSelectProduct }) => {
  const selectedCategoriesValues = useSelector<State, string[]>((state) =>
    map(state.market.selectedCategories, 'value')
  );
  const products = useSelector<State, IProduct[]>((state) =>
    state.market.products.filter((p) =>
      selectedCategoriesValues.includes(p.category)
    )
  );
  const dispatch = useDispatch();
  const handleAddProduct = useCallback(
    (id: string) => () => {
      const foundProduct = products.find((p) => p.productId.value === id);
      if (foundProduct) {
        dispatch(addProduct(foundProduct));
      }
    },
    [dispatch, products]
  );

  const handleSelectProduct = useCallback(
    (id: string) => () => {
      if (onSelectProduct) {
        onSelectProduct(id);
      }
    },
    [onSelectProduct]
  );

  return (
    <GalleryWrapperStyled className={className}>
      {products.map((product) => (
        <Product
          key={product.productId.value}
          onAdd={handleAddProduct(product.productId.value)}
          onSelect={handleSelectProduct(product.productId.value)}
          data={product}
        />
      ))}
    </GalleryWrapperStyled>
  );
};

export default memo(Gallery);
