import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/route';
import CartContainer from '../../containers/CartContainer';

import { Wrapper, StyledButton, Container } from './Navbar.styles';

import LoginIcon from '@mui/icons-material/Login';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to={ROUTE.HOME} className='logo'>
          Hike-r-us
        </Link>
        <Link to={ROUTE.ALL_PRODUCTS} data-testid='products_nav'>
          All Products
        </Link>
        <Link to={ROUTE.DEALS} data-testid='deals'>
          Fresh Deals
        </Link>
      </div>
      <Wrapper>
        <CartContainer />
        <Link to={ROUTE.LOGIN}>
          <StyledButton sx={{ mt: 5 }}>
            {' '}
            <LoginIcon />
          </StyledButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
