import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid grey;
  background: linear-gradient(
    113.26132101258463deg,
    rgba(106, 61, 64, 1) 4.3203125%,
    rgba(44, 33, 33, 1) 99.00781249999999%
  );
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  height: 100%;
  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  p {
    color: #8d8741;
    font-size: 16px;
    font-weight: bold;
  }

  h3 {
    line-height: 1.2;
    margin: 0;
    background: linear-gradient(
      113.26132101258463deg,
      rgba(250, 247, 245, 1) 4.3203125%,
      rgba(226, 210, 196, 1) 99.00781249999999%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
