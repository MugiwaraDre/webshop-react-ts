import { Button } from '@mui/material';
// Types
import { CartItemType } from '../../../constants/cartItemType';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;

  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          className='remove_from_cart_btn'
          data-testid={'remove_btn'}
          disableElevation
          variant='contained'
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          -
        </Button>
        <p>{item.amount}</p>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
