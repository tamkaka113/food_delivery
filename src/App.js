import { BrowserRouter as Router } from 'react-router-dom';

import Theme from 'utils/customMaterialUi';
import ApiProvider from './contexts/ApiContext';
import RootRouter from './RootRouter/RootRouter'
import 'react-toastify/dist/ReactToastify.css';
import FilterProvider from 'contexts/FilterContext';
import {AuthProvider} from 'contexts/AuthContext';
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
<AuthProvider>
        <FilterProvider>
            <ApiProvider>
            <Header/>
            <RootRouter />
            </ApiProvider>

      </FilterProvider>
</AuthProvider>

  
      </Router>
      <ScrollButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
