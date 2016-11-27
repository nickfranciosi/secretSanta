import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from "../store";
import * as Navigation from '../Navigation';
const { container: NavigationContainer } = Navigation;
import { renderSceneExternal } from '../Navigation/router';
let store = configureStore();


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer renderScene={renderSceneExternal} />
      </Provider>
    );
  }
}


export default App;
