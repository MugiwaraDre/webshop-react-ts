import React, { useContext } from 'react';
import { ProductsContext } from '../../store/products-context';

import { CartItemType } from '../../constants/cartItemType';

import Cart from '../../components/Cart';

import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Wrapper, StyledButton } from './CartContainer.styles';

const CartContainer: React.FC<{}> = () => {
  const productsCtx = useContext(ProductsContext);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  return (
    <Wrapper>
      <Drawer
        anchor='right'
        open={productsCtx.cartOpen}
        onClose={() => productsCtx.setCartOpen(false)}
      >
        <Cart
          cartItems={productsCtx.cart}
          removeFromCart={productsCtx.handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton
        onClick={() => productsCtx.setCartOpen(true)}
        className='cart-btn'
        data-testid='btn'
      >
        <Badge badgeContent={getTotalItems(productsCtx.cart)} color='error'>
          <ShoppingCartIcon />
        </Badge>
      </StyledButton>
    </Wrapper>
  );
};

export default CartContainer;
