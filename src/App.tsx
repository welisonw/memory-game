
import * as AppStyles from './App.styles';
import logoImg from './assets/devmemory_logo.png';
import { InfoItem } from './components/InfoItem/InfoItem';

function App() {
  
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
        <button>Reinicar</button>
      </AppStyles.InfosArea>
      <AppStyles.CardsArea>
        ...
      </AppStyles.CardsArea>
    </AppStyles.Container>
  );
};

export default App;
