import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const Container = styled.div`
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 40px;
    color: #8d8741;
    font-style: italic;
    font-weight: bold;
    font-family: fantasy;
    padding: 1rem;
  }

  a {
    text-decoration: none;
    padding: 1rem;
    font-weight: bold;
    font-size: 20px;
  }
  a:hover {
    text-decoration: underline;
  }
`;
export const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(IconButton)`
  z-index: 100;
  cursor: pointer;
`;
