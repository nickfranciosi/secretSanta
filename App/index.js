import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from "../store";
import * as Navigation from '../Navigation';
const { container: NavigationContainer, sceneRenderer } = Navigation;
import scenesConfig from './scenesConfig';

let renderScene = sceneRenderer(scenesConfig);
let store = configureStore();


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer renderScene={renderScene} />
      </Provider>
    );
  }
}


export default App;
