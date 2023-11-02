import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { UserProvider } from './contexts/user-context.tsx';
import { CategoriesProvider } from './contexts/categories-context.tsx';
import { CartContextProvider } from './contexts/cart-context.tsx';
import { GlobalStyle } from './index-styles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartContextProvider>
            <App />
            <GlobalStyle />
          </CartContextProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

