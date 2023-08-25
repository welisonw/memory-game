
import { useEffect, useState } from 'react';
import * as AppStyles from './App.styles';
import logoImg from './assets/devmemory_logo.png';
import { Button } from './components/Button/Button';
import { InfoItem } from './components/InfoItem/InfoItem';
import restartIcon from './svg/restart.svg';
import { GridItemType } from './types/GridItemType';


function App() {
  const [ playing, setPlaying ] = useState<boolean>(false);
  const [ timeElapsed, setTimeElapsed ] = useState<number>(0);
  const [ moveCount, setMoveCount ] = useState<number>(0);
  const [ shownCount, setShownCount ] = useState<number>(0);
  const [ gridItems, setGridItems ] = useState<GridItemType[]>([]);

  useEffect(() => {
    handleResetAndCreateGame();
    
  }, []);

  const handleResetAndCreateGame = () => {
    // reset game
    setPlaying(false);
    setTimeElapsed(0);
    setShownCount(0);
    setMoveCount(0);
  };
  
  return (
    <AppStyles.Container>
      <AppStyles.InfosArea>
        <AppStyles.Logo href=''>
          <img src={logoImg} alt='' width={200} />
        </AppStyles.Logo>
        <AppStyles.Data>
          <InfoItem title='Tempo' value='00:00' />
          <InfoItem title='Movimentos' value='0' />
        </AppStyles.Data>
        <Button 
          icon={restartIcon}
          title='Reiniciar'
          onClick={handleResetAndCreateGame}
        />
      </AppStyles.InfosArea>

      <AppStyles.CardsArea>
        <AppStyles.Cards>
          ///
        </AppStyles.Cards>
      </AppStyles.CardsArea>
    </AppStyles.Container>
  );
};

export default App;
