
import { GridItemType } from '../../types/GridItemType';
import * as CardStyles from './Card.styles';
import backCard from '../../../public/backCard.png';
import { cards } from '../../data/cards'

type Props = {
  card: GridItemType,
  onClick: () => void,
};

export const Card = ({ card, onClick }: Props) => {
  return (
    <CardStyles.Container onClick={onClick}>
      {
        !card.permanentShown && !card.shown &&
        <CardStyles.Icon src={backCard} alt='texture back card' />
      }
      {
        (card.permanentShown || card.shown) && card.item !== null &&
        <CardStyles.Icon src={cards[card.item]} alt='card' />
      }
    </CardStyles.Container>
  );
};
