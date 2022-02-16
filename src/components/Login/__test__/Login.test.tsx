import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';

const renderWithRouter = (ui: JSX.Element, { route = '/login' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};
describe('login component', () => {
  it('should render login page', () => {
    renderWithRouter(<App />);
    expect(
      screen.getByText(/You must log in to view the page at/i)
    ).toBeInTheDocument();
  });
  it('should login with input from form', async () => {
    const { container } = renderWithRouter(<App />);
    userEvent.type(screen.getByLabelText(/Username:/i), 'dre');
    userEvent.type(screen.getByLabelText(/Password:/i), 'test');

    const leftClick = { button: 0 };

    userEvent.click(container.querySelector('.login-test')!, leftClick);

    await waitFor(() =>
      expect(screen.getByText(/Welcome dre/i)).toBeInTheDocument()
    );
  });
});
