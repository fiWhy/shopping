import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { find, findIndex } from 'lodash';
import { Category } from '../../interfaces/category';
import { Product } from '../../interfaces/product';
import { MarketState } from '../interfaces';

export const marketSlice = createSlice({
  name: 'market',
  initialState: {
    currency: {
      sign: '$',
      name: 'USD',
    },
    selectedCategories: [],
    products: [],
    categories: [],
  } as MarketState,
  reducers: {
    uploadCategories: (state, action: PayloadAction<Category[]>) => ({
      ...state,
      categories: [...action.payload],
      selectedCategories: [...action.payload],
    }),
    uploadProducts: (state, action: PayloadAction<Product[]>) => ({
      ...state,
      products: [...action.payload],
    }),
    selectCategory: (state, { payload }: PayloadAction<string>) => {
      const index = findIndex(
        state.selectedCategories,
        (c) => c.id === payload
      );

      if (index !== -1) {
        state.selectedCategories.splice(index, 1);
      } else {
        const existingCategory = find(
          state.categories,
          (c) => c.id === payload
        );
        existingCategory && state.selectedCategories.push(existingCategory);
      }
    },
  },
});

export const { uploadCategories, uploadProducts, selectCategory } =
  marketSlice.actions;
export default marketSlice.reducer;
