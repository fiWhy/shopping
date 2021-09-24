import React, { memo, VFC } from 'react';
import { ProductProps } from './interfaces';
import { ProductWrapperStyled } from './styles';

const Product: VFC<ProductProps> = () => {
  return (
    <ProductWrapperStyled direction={'column'}>
      Hello product
    </ProductWrapperStyled>
  );
};

export default memo(Product);
