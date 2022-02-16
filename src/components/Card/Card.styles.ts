import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: 'image' 'text' 'buttons';
  border-radius: 18px;
  background: linear-gradient(
    113.26132101258463deg,
    rgba(106, 61, 64, 1) 4.3203125%,
    rgba(44, 33, 33, 1) 99.00781249999999%
  );
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextPrice = styled.span`
  font-size: 13px;
  color: rgb(255, 7, 110);
`;

export const CardTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
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
`;

export const CardText = styled.p`
  color: #8d8741;
  font-size: 16px;
  font-weight: bold;
`;

export const CardButtonsWrapper = styled.div`
  grid-area: buttons;
  display: grid;
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;*/

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
  background: #bc986a;
`;

export const StyledButton = styled(IconButton)`
  cursor: pointer;
`;
