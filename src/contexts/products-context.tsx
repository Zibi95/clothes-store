import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../services/firebase/firebase-utils';
import { Category } from '../types/category';
import { Product } from '../types/product';

type ProductsContextType = {
  products: Category;
  setProducts: React.Dispatch<React.SetStateAction<Category>>;
  allProducts: Product[];
};

const ProductsContext = createContext<ProductsContextType>({
  products: {},
  setProducts: () => {},
  allProducts: [],
});

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Category>({});

  useEffect(() => {
    getCategoriesAndDocuments().then(categoryMap => setProducts(categoryMap));
  }, []);

  const allProducts = ([] as Product[]).concat(...Object.values(products));
  const value = { products, setProducts, allProducts };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => {
  const state = useContext(ProductsContext);

  return state;
};

