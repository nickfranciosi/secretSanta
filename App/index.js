import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from "../store";
import * as Navigation from '../containers/Navigation';
const { container: NavigationContainer } = Navigation;

let store = configureStore();


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer scenes={[]} />
      </Provider>
    );
  }
}


export default App;
