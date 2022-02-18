import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../../../App';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
const renderWithRouter = (ui: JSX.Element, { route = '/allproducts' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};
describe('CartContainer', () => {
  it('should render cart when cart-btn is clicked', () => {
    const { container } = render(<App />, { wrapper: MemoryRouter });
    const leftClick = { button: 0 };

    userEvent.click(container.querySelector('.cart-btn')!, leftClick);

    expect(screen.getByText(/Your Shopping Cart/i)).toBeInTheDocument();
  });

  it('should render remove from cart button when item is added to cart', async () => {
    const { container } = renderWithRouter(<App />);
    const leftClick = { button: 0 };

    userEvent.click(container.querySelector('.add_to_cart_btn')!, leftClick);
    userEvent.click(container.querySelector('.cart-btn')!, leftClick);
    await waitFor(() =>
      expect(screen.queryByTestId('remove_btn')).toBeInTheDocument()
    );
  });
  it('should remove item from cart', async () => {
    const { container } = renderWithRouter(<App />);
    const leftClick = { button: 0 };

    userEvent.click(container.querySelector('.add_to_cart_btn')!, leftClick);
    userEvent.click(container.querySelector('.cart-btn')!, leftClick);
    fireEvent.click(screen.queryByTestId('remove_btn')!, leftClick);
    await waitFor(() =>
      expect(screen.queryByTestId('remove_btn')).not.toBeInTheDocument()
    );
  });

  it('should store cart in localstorage', async () => {
    const { container } = renderWithRouter(<App />);
    const leftClick = { button: 0 };

    userEvent.click(container.querySelector('.add_to_cart_btn')!, leftClick);
    const fetchedCart = JSON.parse(localStorage.getItem('Cart')!);
    await waitFor(() => expect(fetchedCart).toBeDefined());
  });

  it('should store cart in localstorage with items when added to cart', async () => {
    const { container } = renderWithRouter(<App />);
    const leftClick = { button: 0 };

    userEvent.click(container.querySelector('.add_to_cart_btn')!, leftClick);
    userEvent.click(container.querySelector('.add_to_cart_btn')!, leftClick);
    userEvent.click(container.querySelector('.add_to_cart_btn')!, leftClick);
    const fetchedCart = JSON.parse(localStorage.getItem('Cart')!);

    await waitFor(() => expect(fetchedCart[0].amount).toBe(3));
  });
});
