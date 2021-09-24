import { CartItem } from '../interfaces/cart';
import { Category } from '../interfaces/category';
import { Currency } from '../interfaces/currency';
import { Product } from '../interfaces/product';

export interface CartState {
  total: number;
  products: CartItem[];
}

export interface MarketState {
  currency: Currency;
  selectedCategories: Category[];
  products: Product[];
  categories: Category[];
}

export interface State {
  cart: CartState;
  market: MarketState;
}
