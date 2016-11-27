import React from "react";
import { connect } from "react-redux";
import {pushRoute, popRoute} from "./actions";

const RouteWrapper = (Component, navProps, scenes )=> class extends React.Component {
  constructor(props) {
    super(props);
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

  handleNavigate(action, type) {
    switch(type) {
      case "push":
        this.props.pushRoute(action.route);
        return true;
      case "back":
      case "pop":
        this.props.handleBack();
      default:
        return false;
    }
  }

  render(){
    return (
      <Component
        {...this.props}
        navigate={{
          to: this.handleNavigate,
          back: this.handleBack,
        }}
        scenes={scenes}
      />
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    navigation: state.navReducer,
  }
};

const connectedWithNavActions = connect(mapStatetoProps, {
  pushRoute,
  popRoute,
});

export function sceneRenderer(scenes) {
  return (props) => {
    const { route } = props.scene;

    const Component =  scenes[route.key].component;
    const WrappedComponent = connectedWithNavActions(RouteWrapper(Component, props, scenes));

    return <WrappedComponent />;
  }
}
