import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AllProductsPage from '../index';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('AllProductsPage container', () => {
  it('should render AllProductsPage', () => {
    render(<AllProductsPage />);
    expect(
      screen.getByText(/you are on the Products page/i)
    ).toBeInTheDocument();
  });

  it('should render correct ammount of products', () => {
    renderWithRouter(<App />, {
      route: '/allproducts',
    });
    const products = screen.getAllByTestId('grid-item');
    expect(products.length).toBe(6);
  });
  it('should return correct value ffrom searchfield', () => {
    render(<AllProductsPage />);
    const searchInput = screen.getByPlaceholderText('search for an item...');

    userEvent.type(searchInput, 'Boot');

    expect(searchInput).toHaveValue('Boot');
  });

  it('should render correct item from searchinput', () => {
    render(<AllProductsPage />);

    const searchInput = screen.getByPlaceholderText('search for an item...');

    userEvent.type(searchInput, 'Ultra');
    const elem = screen.getAllByTestId('grid');

    expect(elem.length).toBe(1);
  });

  it('should render correct ammount of products after search', () => {
    renderWithRouter(<App />, {
      route: '/allproducts',
    });
    const searchInput = screen.getByPlaceholderText('search for an item...');

    userEvent.type(searchInput, 'Ultra');
    const products = screen.getAllByTestId('grid-item');
    expect(products.length).toBe(1);
  });

  it('should render correct ammount of products after search', () => {
    renderWithRouter(<App />, {
      route: '/allproducts',
    });
    const searchInput = screen.getByPlaceholderText('search for an item...');

    userEvent.type(searchInput, 'b');
    const products = screen.getAllByTestId('grid-item');
    expect(products.length).toBe(3);
  });

  it('landing on a bad page', () => {
    renderWithRouter(<App />, {
      route: '/something-that-does-not-match',
    });

    expect(screen.getByText(/Hike-r-us/i)).toBeInTheDocument();
  });
});
