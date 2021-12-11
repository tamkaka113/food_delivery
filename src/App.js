
import './App.scss';

import RootRouter from 'appRouter/RootRouter/RootRouter';
import {BrowserRouter} from "react-router-dom"

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import storeConfig from './store/config'
import { Provider } from "react-redux";
const {store,persistor} = storeConfig()


function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   <BrowserRouter>
<RootRouter/>
   </BrowserRouter>
   </PersistGate>

 </Provider>
  );
}

export default App;
