import React, { useEffect, useState } from 'react';
import { CartItemType } from '../constants/cartItemType';
import { user as User } from '../Types';
import data from './products.json';
import { authProvider } from '../auth';

type ProductsContextObj = {
  cart: CartItemType[];
  products: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
  cartOpen: boolean;
  setCartOpen: (arg: boolean) => void;
  user: User;
  signIn: (user: string, password: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
};

export const ProductsContext = React.createContext<ProductsContextObj>({
  cart: [],
  products: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: (id: number) => {},
  cartOpen: false,
  setCartOpen: (arg: boolean) => {},
  signIn: (user: string, password: string, callback: VoidFunction) => {},
  signOut: (callback: VoidFunction) => {},
  user: {
    username: '',
    name: '',
    password: '',
    address: 'testvägen',
  },
});

const ProductsContextProvider: React.FC = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [products, setProducts] = useState<CartItemType[]>(data);
  let [user, setUser] = useState<any>(null);

  const signIn = (
    newUser: string,
    password: string,
    callback: VoidFunction
  ) => {
    return authProvider.signIn(() => {
      let temp: User = {
        name: newUser,
        password: password,
        username: newUser,
        address: 'testvägen',
      };
      setUser(temp);
      callback();
    });
  };

  const signOut = (callback: VoidFunction) => {
    return authProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    if (clickedItem.stock > 0) {
      setCartItems((prev) => {
        // if an item is in chart
        const isItemInCart = prev.find((item) => item.id === clickedItem.id);

        if (isItemInCart) {
          return prev.map((item) =>
            item.id === clickedItem.id
              ? {
                  ...item,
                  amount: item.amount + 1,
                  stock: (item.stock = clickedItem.stock--),
                }
              : item
          );
        }
        // First time an item is added
        return [
          ...prev,
          { ...clickedItem, amount: 1, stock: clickedItem.stock-- },
        ];
      });
    }

    localStorage.setItem('Cart', JSON.stringify(cartItems));
    localStorage.setItem('Products', JSON.stringify(products));
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return ack;
          }
          return [
            ...ack,
            {
              ...item,
              amount: item.amount - 1,
            },
          ];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );

    setProducts((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [
            ...ack,
            {
              ...item,
              stock: item.stock + 1,
            },
          ];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );

    localStorage.setItem('Cart', JSON.stringify(cartItems));
    localStorage.setItem('Products', JSON.stringify(products));
  };

  useEffect(() => {
    if (localStorage.getItem('Cart')) {
      let cartData = JSON.parse(localStorage.getItem('Cart')!);
      setCartItems(cartData);
    } else {
      const Cart: CartItemType[] = [];
      localStorage.setItem('Cart', JSON.stringify(Cart));
    }
  }, [setCartItems]);

  useEffect(() => {
    if (localStorage.getItem('Products')) {
      let productsData = JSON.parse(localStorage.getItem('Products')!);
      setProducts(productsData);
    } else {
      const Products: CartItemType[] = [];
      localStorage.setItem('Cart', JSON.stringify(Products));
    }
  }, [setProducts]);

  const contextValue: ProductsContextObj = {
    cart: cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    products,
    cartOpen,
    setCartOpen,
    signOut,
    signIn,
    user,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
