import { configureStore } from '@reduxjs/toolkit';

import marketReducer from './features/market';
import cartReducer from './features/cart';

export * from './interfaces';

export default configureStore({
  reducer: {
    market: marketReducer,
    cart: cartReducer,
  },
});
