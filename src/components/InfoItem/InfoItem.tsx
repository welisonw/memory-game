
import * as InfoItemStyles from './InfoItem.styles'

type Props = {
  title: string,
  value: string,
};

export const InfoItem = ({ title, value }: Props) => { 

  return (
    <InfoItemStyles.Container>
      <InfoItemStyles.Title>{title}</InfoItemStyles.Title>
      <InfoItemStyles.Value>{value}</InfoItemStyles.Value>
    </InfoItemStyles.Container>
  );
};
