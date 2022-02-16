import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import App, { LocationDisplay } from '../App';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('full app rendering/navigation', () => {
  it('should render full app without crashing and be at homepage', () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText(/homepage/i)).toBeInTheDocument();
  });

  it('should render AllProductsPage on click', () => {
    render(<App />, { wrapper: MemoryRouter });

    const leftClick = { button: 0 };
    userEvent.click(screen.getByTestId('products_nav'), leftClick);

    // check that the content changed to the new page
    expect(
      screen.getByText(/you are on the products page/i)
    ).toBeInTheDocument();
  });

  it('should render AllProductsPage on click', () => {
    render(<App />, { wrapper: MemoryRouter });

    const leftClick = { button: 0 };
    userEvent.click(screen.getByTestId('deals'), leftClick);

    // check that the content changed to the new page
    expect(screen.getByText(/Best deals right now!/i)).toBeInTheDocument();
  });
});
