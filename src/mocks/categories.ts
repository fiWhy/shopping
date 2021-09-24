import { uniqueId } from 'lodash';
import { Category } from '../interfaces/category';

export default [
  {
    id: uniqueId(),
    value: 'Alcohol',
  },
  {
    id: uniqueId(),
    value: 'Bakery',
  },
  {
    id: uniqueId(),
    value: 'Diary & Eggs',
  },
  {
    id: uniqueId(),
    value: 'Drinks',
  },
  {
    id: uniqueId(),
    value: 'Frozen',
  },
  {
    id: uniqueId(),
    value: 'Home & Health',
  },
  {
    id: uniqueId(),
    value: 'Meat, Fish & Protein',
  },
  {
    id: uniqueId(),
    value: 'Pantry',
  },
  {
    id: uniqueId(),
    value: 'Pet Products',
  },
] as Category[];
