import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Product } from '../types/product';

type CartContextType = {
  isCartOpen: boolean;
  items: Product[];
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  items: [],
  toggleCart: () => {},
});

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  const toggleCart = () => {
    console.log(isCartOpen);
    setisCartOpen(prevState => !prevState);
  };

  const value = {
    isCartOpen,
    items,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

