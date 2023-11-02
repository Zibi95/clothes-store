import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { CartItemType } from '../types/cartItem';
import { Product } from '../types/product';

type CartContextType = {
  isCartOpen: boolean;
  items: CartItemType[];
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  totalItemsInCart: number;
  totalCartPrice: number;
  decrementQuantity: (id: number) => void;
  deleteCartItem: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  items: [],
  toggleCart: () => {},
  addToCart: () => {},
  totalItemsInCart: 0,
  totalCartPrice: 0,
  decrementQuantity: () => {},
  deleteCartItem: () => {},
});

const aggregateCartItems = (items: CartItemType[], product: Product): CartItemType[] => {
  const existingItem = items.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
    return [...items];
  }

  return [...items, { ...product, quantity: 1 }];
};

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [items, setItems] = useState<CartItemType[]>([]);

  const totalItemsInCart = useMemo(() => items.reduce((acc, curr) => acc + curr.quantity, 0), [items]);

  const totalCartPrice = useMemo(() => items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0), [items]);

  const toggleCart = () => {
    setisCartOpen(prevState => !prevState);
  };

  const addToCart = (product: Product) => {
    setItems(aggregateCartItems(items, product));
  };

  const deleteCartItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const decrementQuantity = (id: number) => {
    const curItem = items.find(item => item.id === id);
    if (curItem?.quantity === 1) {
      deleteCartItem(id);
      return;
    }

    setItems(
      items.map(item => {
        if (item.id === id) {
          --item.quantity;
        }

        return item;
      })
    );
  };

  const value = {
    isCartOpen,
    items,
    toggleCart,
    addToCart,
    totalItemsInCart,
    totalCartPrice,
    decrementQuantity,
    deleteCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

