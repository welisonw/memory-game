
import { useEffect, useState } from 'react';
import * as AppStyles from './App.styles';
import logoImg from './assets/devmemory_logo.png';
import { Button } from './components/Button/Button';
import { InfoItem } from './components/InfoItem/InfoItem';
import restartIcon from './svg/restart.svg';
import { GridItemType } from './types/GridItemType';
import { cards } from './data/cards';


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
    setTimeElapsed(0);
    setShownCount(0);
    setMoveCount(0);

    // create grid
    let temporaryGrid: GridItemType[] = [];

    /// create empty grid
    for(let i = 0; i < cards.length * 2; i++) {
      temporaryGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    };

    /// fill the grid
    for(let w = 0; w < 2; w++) {
      for(let i = 0; i < cards.length * 2; i++) {
        let position = -1;

        while (position < 0 || temporaryGrid[position].item !== null) {
          position = Math.floor(Math.random() * (cards.length *  2));
        };


        temporaryGrid[position].item = i;
      };
    };


    setGridItems(temporaryGrid);

    // start game
    setPlaying(true);
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
