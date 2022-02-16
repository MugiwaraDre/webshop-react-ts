import { CardType } from '../../Types';
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  StyledButton,
  CardTitle,
  CardText,
  CardButtonsWrapper,
} from './Card.styles';

export const Card = ({ title, imgUrl, description }: CardType) => {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardTextWrapper>
      <CardButtonsWrapper>
        <StyledButton>Read more</StyledButton>
      </CardButtonsWrapper>
    </CardWrapper>
  );
};
