import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore () {
  const store = createStore(rootReducer)
  console.log(store.getState());
  if (module.hot) {
      module.hot.accept(() => {
        const nextRootReducer = require('./rootReducer').default
        store.replaceReducer(nextRootReducer)
      })
    }
  return store
}
