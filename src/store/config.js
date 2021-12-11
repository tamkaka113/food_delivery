import {createStore, applyMiddleware, compose} from 'redux'
import RootReducer from './RootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

  const middleware = [
    thunkMiddleware,
]
const enhancers = []
const devToolsExtension =(window ).devToolsExtension ? (window).devToolsExtension() : (f) => f

enhancers.push(devToolsExtension)
  const persistConfig = {
    key: 'root',
    storage,
  whitelist:["ProductReducer"]
  
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);
   
  const persistedReducer = persistReducer(persistConfig,RootReducer)
   
  export default () => {
    let store = createStore(persistedReducer,composedEnhancers)
    let persistor = persistStore(store)
    return { store, persistor }
  }