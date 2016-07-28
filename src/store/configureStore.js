/**
 * Created by Onion on 7/27/16.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from '../reducers/mainReducer';

export default function configureStore(initialState) {
  const store = createStore(mainReducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    module.hot.accept('../reducers/mainReducer', () => {
      const nextRootReducer = mainReducer;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
