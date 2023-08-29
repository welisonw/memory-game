
import { useEffect, useState } from 'react';
import * as AppStyles from './App.styles';
import logoImg from './assets/devmemory_logo.png';
import { Button } from './components/Button/Button';
import { InfoItem } from './components/InfoItem/InfoItem';
import restartIcon from './svg/restart.svg';
import { GridItemType } from './types/GridItemType';
import { cards } from './data/cards';
import { Card } from './components/Card/Card';
import { formatTimeElapsed } from './utils/formatTimeElapsed';


function App() {
  const [ playing, setPlaying ] = useState<boolean>(false);
  const [ timeElapsed, setTimeElapsed ] = useState<number>(0);
  const [ moveCount, setMoveCount ] = useState<number>(0);
  const [ shownCount, setShownCount ] = useState<number>(0);
  const [ gridItems, setGridItems ] = useState<GridItemType[]>([]);

  useEffect(() => {
    handleResetAndCreateGame();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (playing) {
        setTimeElapsed(timeElapsed => timeElapsed + 1);
      };
    }, 1000);

    return () => clearTimeout(timer);
  }, [playing, timeElapsed]);


  useEffect(() => {
    if (shownCount !== 2) return;
  
    const openCards = gridItems.filter(item => item.shown);
    
    if (openCards.length !== 2) return;
  
    const areCardsEqual = openCards[0].item === openCards[1].item;
    
    if (areCardsEqual) {  
      // check if the open cards are the same
      let temporaryGrid = [...gridItems];
    
      temporaryGrid.map(item => {
        if (item.shown) {
          item.permanentShown = true,
          item.shown = false
        };
      });
    
      setGridItems(temporaryGrid);
      setShownCount(0);
    } else {
      // if they are not equal, close all 'shown'
      setTimeout(() => {
        let resetGrid = [...gridItems];
  
        resetGrid.map(item => item.shown = false);
  
        setGridItems(resetGrid);
        setShownCount(0);
      }, 1100);
    };

    setMoveCount(moveCount => moveCount + 1);
  }, [shownCount, gridItems]);



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
      for(let i = 0; i < cards.length; i++) {
        let position = -1;

        while (position < 0 || temporaryGrid[position].item !== null) {
          position = Math.floor(Math.random() * (cards.length * 2));
        };

        temporaryGrid[position].item = i;
      };
    };

    setGridItems(temporaryGrid);

    // start game
    setPlaying(true);
  };

  const handleCardClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let temporaryGrid = [...gridItems];

      if (temporaryGrid[index].permanentShown === false && temporaryGrid[index].shown === false) {
        temporaryGrid[index].shown = true;

        setShownCount(shownCount => shownCount + 1);
      };

      setGridItems(temporaryGrid);

    };


  };

  
  return (
    <AppStyles.Container>
      <AppStyles.InfosArea>
        <AppStyles.Logo href=''>
          <img src={logoImg} alt='' width={200} />
        </AppStyles.Logo>

        <AppStyles.Data>
          <InfoItem title='Tempo' value={formatTimeElapsed(timeElapsed)} />
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
          {
            gridItems.map((card, index) => (
              <Card 
                key={index}
                card={card}
                onClick={() => handleCardClick(index)}
              />
            ))
          }
        </AppStyles.Cards>
      </AppStyles.CardsArea>
    </AppStyles.Container>
  );
};

export default App;
