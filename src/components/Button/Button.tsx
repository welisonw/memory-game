
import { MouseEvent } from 'react';
import * as ButtonStyles from './Button.styles';

type Props = {
  title: string,
  icon?: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void,
}

export const Button = ({ title, icon, onClick }: Props) => {
  return (
    <ButtonStyles.Container onClick={onClick}>
      {icon &&
        <ButtonStyles.IconArea>
          <ButtonStyles.Icon src={icon} />
        </ButtonStyles.IconArea>
      }
      <ButtonStyles.Title>{title}</ButtonStyles.Title>
    </ButtonStyles.Container>
  );
};
