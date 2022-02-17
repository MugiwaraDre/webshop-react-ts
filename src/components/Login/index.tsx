import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LocationDisplay } from '../../App';
import { ProductsContext } from '../../store/products-context';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function useAuth() {
  return useContext(ProductsContext);
}

const LoginPage = () => {
  let navigate = useNavigate();
  let location = LocationDisplay();
  let auth = useAuth();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get('username') as string;
    let password = formData.get('password') as string;

    auth.signIn(username, password, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page.
      navigate('/userprofile', { replace: true });
    });
  }

  return (
    <motion.div
      style={{ height: '100vh' }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {auth.user ? (
        <span>You are logged in.</span>
      ) : (
        <div>
          <span>You must log in to view the page at {location}</span>

          <form onSubmit={handleSubmit}>
            <label style={{ minWidth: '50vw' }}>
              Username: <input name='username' type='text' />
            </label>
            <br />
            <label>
              Password: <input name='password' type='password' />
            </label>
            <Button type='submit' className='login-test'>
              Login
            </Button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export function Layout() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <AuthStatus />

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/userprofile'>User profile</Link>
        </li>
      </ul>

      <Outlet />
    </motion.div>
  );
}

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return (
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        You are not logged in.
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <p>
        Welcome {auth.user.username}!<br></br>
        <button
          onClick={() => {
            auth.signOut(() => navigate('/'));
          }}
        >
          Sign out
        </button>
      </p>
    </motion.div>
  );
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page.
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}

export function ProtectedPage() {
  let ctx = useAuth();
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h3>Your Info:</h3>
        <p>Address: {ctx.user.address}</p>
      </div>
      <div>
        <h3>Your cart:</h3>
        <ul>
          {ctx.cart ? ctx.cart.map((item) => <li>{item.title}</li>) : null}
        </ul>
      </div>
    </motion.div>
  );
}

export default LoginPage;
