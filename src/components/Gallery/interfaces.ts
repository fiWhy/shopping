import { Product } from '../../interfaces/product';

export interface GalleryProps {
  className?: string;
  onSelectProduct?: (id: string) => void;
}

export interface ProductProps {
  data: Product;
  onSelect: () => void;
  onAdd: () => void;
}
