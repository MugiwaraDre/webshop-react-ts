import './App.css';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import HomePage from './containers/HomePage';
import CheckoutPage from './containers/CheckoutPage';
import AllProductsPage from './containers/AllProductsPage';

import { ROUTE } from './constants/route';
import Navbar from './components/Navbar';
import Deals from './containers/Deals';

import ProductsContextProvider from './store/products-context';
import LoginPage, {
  Layout,
  ProtectedPage,
  RequireAuth,
} from './components/Login';

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid='location-display'>{location.pathname}</div>;
};

function App() {
  return (
    <ProductsContextProvider>
      <Navbar />
      <Routes>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.CHECKOUT} element={<CheckoutPage />} />
        <Route path={ROUTE.ALL_PRODUCTS} element={<AllProductsPage />} />
        <Route path={ROUTE.DEALS} element={<Deals />} />
        <Route element={<Layout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/userprofile'
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>

        <Route path='*' element={<Outlet />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
