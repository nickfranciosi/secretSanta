import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import Home from "../home";
import About from "../about";


const { CardStack: NavigationCardStack } = NavigationExperimental;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    if(this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  handleNavigate(action) {
    switch(action && action.type) {
      case "push":
        this.props.pushRoute(action.route);
        return true;
      case "back":
      case "pop":
        this.handleBack();
      default:
        return false;
    }
  }

  renderScene(props) {
    const { route } = props.scene;

    if (route.key === 'home') {
     return <Home navigateTo={this.handleNavigate} />
    }
    if (route.key === 'about') {
     return <About navigateBack={this.handleBack} />
    }
  }

  render() {
    return(
      <NavigationCardStack
      navigationState={this.props.navigation}
      onNavigate={this.handleNavigation}
      renderScene={this.renderScene}
      />
    )
  }
}

export default Navigation;
