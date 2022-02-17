import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.div)`
  margin: 40px;

  .searchbar {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1.2em;
    position: relative;
    align-items: center;
  }
  input {
    margin-bottom: 2rem;
    border-radius: 6px;
    border: none;
    padding: 1.2em 1.3em;
    width: 70%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    ::placeholder {
      color: #8a8788cc;
      padding-left: 1.7em;
    }
  }

  .product_page {
    opacity: 0;
  }
`;
