import { CartItem } from '../../interfaces/cart';

export interface CartProps {}

export interface ProductProps {
  data: CartItem;
  onChange: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
}
