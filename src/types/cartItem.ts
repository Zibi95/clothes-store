import { Product } from './product';

export type CartItemType = Product & {
  quantity: number;
};

