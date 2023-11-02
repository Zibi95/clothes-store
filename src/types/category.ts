import { Product } from './product';

export type Category = {
  [category: string]: Product[];
};

