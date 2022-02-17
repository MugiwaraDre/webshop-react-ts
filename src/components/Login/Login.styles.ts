import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  display: flex;

  min-width: 50vw;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 50vh;
  width: 50vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  position: relative;
`;

export const InfoText = styled.h3`
  margin: 3rem 0.5rem 2rem 0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  label {
    width: 80%;
  }
  .valid {
    border-color: green;
  }
  .invalid {
    border-color: red;
  }
  .invisible {
    visibility: hidden;
  }
  .error {
    color: #e34343;
  }
`;
export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  margin: 1rem;
  height: 2rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledButton = styled.button`
  background: linear-gradient(to right, #8d8741 0%, #8d8961 79%);
  text-transform: uppercase;

  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
