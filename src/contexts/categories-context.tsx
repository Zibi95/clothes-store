import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../services/firebase/firebase-utils';
import { Category } from '../types/category';

type CategoriesContextType = {
  categories: Category;
  setCategories: React.Dispatch<React.SetStateAction<Category>>;
};

const CategoriesContext = createContext<CategoriesContextType>({
  categories: {},
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<Category>({});

  useEffect(() => {
    getCategoriesAndDocuments().then(categoryMap => setCategories(categoryMap));
  }, []);

  const value = { categories, setCategories };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export const useCategories = () => {
  const state = useContext(CategoriesContext);

  return state;
};

