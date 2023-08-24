
import * as AppStyles from './App.styles';
import logoImg from './assets/devmemory_logo.png';

function App() {
  
  return (
    <AppStyles.Container>
      <AppStyles.Infos>
        <AppStyles.Logo href=''>
          <img src={logoImg} alt='' width={200} />
        </AppStyles.Logo>
        <AppStyles.Data>
          ...
        </AppStyles.Data>
        <button>Reinicar</button>
      </AppStyles.Infos>
      <AppStyles.CardsArea>
        ...
      </AppStyles.CardsArea>
    </AppStyles.Container>
  );
};

export default App;
