import { BrowserRouter as Router } from 'react-router-dom';

import Theme from 'utils/customMaterialUi';
import ApiProvider from './contexts/ApiContext';
import RootRouter from './RootRouter/RootRouter'


import FilterProvider from 'contexts/FilterContext';

// material ui core
import { ThemeProvider } from '@material-ui/core/styles';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ScrollButton from 'components/ScrollButton';

import './App.scss';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Router>
      <FilterProvider>

            <ApiProvider>
            
              <RootRouter />
            </ApiProvider>
      </FilterProvider>
      </Router>
      <ScrollButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
