
import * as AppStyles from './App.styles';
import logoImg from './assets/devmemory_logo.png';
import { Button } from './components/Button/Button';
import { InfoItem } from './components/InfoItem/InfoItem';
import restartIcon from './svg/restart.svg';

function App() {


  const handleRestartGame = () => {

  }
  
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
          onClick={handleRestartGame}
        />
      </AppStyles.InfosArea>
      <AppStyles.CardsArea>
        ...
      </AppStyles.CardsArea>
    </AppStyles.Container>
  );
};

export default App;
