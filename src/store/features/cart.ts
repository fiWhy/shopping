import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { remove } from 'lodash';
import { CartItem } from '../../interfaces/cart';
import { Product } from '../../interfaces/product';
import { CartState } from '../interfaces';

const recalculateTotal = (products: CartItem[]) =>
  products.reduce((acc, n) => acc + n.amount * n.product.price, 0);

const findProduct = (products: CartItem[], id: string) =>
  products.findIndex((p) => p.product.productId.value === id);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    total: 0,
    products: [],
  } as CartState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      const productIndex = findProduct(state.products, payload.productId.value);

      if (productIndex !== -1) {
        state.products[productIndex].amount += payload.stepSize;
      } else {
        state.products.push({
          amount: payload.stepSize,
          product: payload,
        });
      }

      state.total = recalculateTotal(state.products);
    },
    changeProductSize: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        value: number;
      }>
    ) => {
      const { id, value } = payload;
      const productIndex = findProduct(state.products, id);

      if (productIndex !== -1) {
        const product = state.products[productIndex];

        if (value <= 0) {
          state.products.splice(productIndex, 1);
        } else {
          product.amount = value;
        }
      }

      state.total = recalculateTotal(state.products);
    },
    deleteProduct: (state, { payload }: PayloadAction<string>) => {
      state.products = remove(
        state.products,
        (p) => p.product.productId.value !== payload
      );

      state.total = recalculateTotal(state.products);
    },
  },
});

export const { addProduct, changeProductSize, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
