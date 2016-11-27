import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;

class Navigation extends Component {

  render() {
    return(
      <NavigationCardStack
      navigationState={this.props.navigation}
      onNavigate={this.props.handleNavigation}
      renderScene={this.props.renderScene}
      />
    )
  }
}

export default Navigation;
