import React, { useContext, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LocationDisplay } from '../../App';
import { ProductsContext } from '../../store/products-context';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ButtonContainer,
  InfoText,
  InputContainer,
  LoginContainer,
  StyledButton,
  StyledInput,
  Wrapper,
} from './Login.styles';

export function useAuth() {
  return useContext(ProductsContext);
}

const LoginPage = () => {
  let navigate = useNavigate();
  let location = LocationDisplay();
  let auth = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameIsVisited, setUsernameIsVisited] = useState<boolean>(false);
  const [passwordIsVisited, setPasswordIsVisited] = useState<boolean>(false);

  const [usernameIsValid, usernameMessage] = isValidUsername(username);
  const [passwordIsValid, passwordMessage] = isValidPassword(password);
  const formIsValid = usernameIsValid && passwordIsValid;

  const usernameInputCss = !usernameIsVisited
    ? ''
    : usernameIsValid
    ? 'valid'
    : 'invalid';
  const passwordInputCss = !passwordIsVisited
    ? ''
    : passwordIsValid
    ? 'valid'
    : 'invalid';
  const usernameMessageCss =
    (usernameIsVisited ? '' : 'invisible') + (usernameIsValid ? '' : ' error');
  const passwordMessageCss =
    (passwordIsVisited ? '' : 'invisible') + (passwordIsValid ? '' : ' error');

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
    <Wrapper
      style={{ height: '100vh' }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {auth.user ? (
        <span>You are logged in.</span>
      ) : (
        <LoginContainer>
          <InfoText>You must log in to view the page at {location}</InfoText>

          <form onSubmit={handleSubmit}>
            <InputContainer>
              <label>
                Username:{' '}
                <StyledInput
                  className={usernameInputCss}
                  name='username'
                  type='text'
                  placeholder='enter username with atleast 2 symbols'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => setUsernameIsVisited(true)}
                />
                <p className={usernameMessageCss}> {usernameMessage} </p>
              </label>
              <br />
              <label>
                Password:{' '}
                <StyledInput
                  className={passwordInputCss}
                  name='password'
                  type='password'
                  placeholder='enter password with atleast 4 symbols'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setPasswordIsVisited(true)}
                />
                <p className={passwordMessageCss}> {passwordMessage} </p>
              </label>
            </InputContainer>
            <ButtonContainer>
              <StyledButton
                type='submit'
                className='login-test'
                disabled={!formIsValid}
              >
                Login
              </StyledButton>
            </ButtonContainer>{' '}
          </form>
        </LoginContainer>
      )}
    </Wrapper>
  );
};

function isValidUsername(username: string): [boolean, string] {
  if (username.length >= 2) {
    return [true, '✅'];
  } else {
    return [false, '❌ Please use two letters atleast.'];
  }
}
function isValidPassword(password: string): [boolean, string] {
  if (password.length >= 4) {
    return [true, '✅'];
  } else {
    return [false, '❌ Please use four letters atleast.'];
  }
}

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
    <Wrapper
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <p>
        Welcome {auth.user.username}!<br></br>
        <StyledButton
          onClick={() => {
            auth.signOut(() => navigate('/'));
          }}
        >
          Sign out
        </StyledButton>
      </p>
    </Wrapper>
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
