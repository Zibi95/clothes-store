import { Product } from './product';

export type Category = {
  [key: string]: Product[];
};

