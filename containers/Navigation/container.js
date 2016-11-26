import { connect } from "react-redux";

import * as actions from "./actions";
import Navigation from "./component";

const mapStatetoProps = (state) => {
  return {
    navigation: state.navReducer,
  }
}

export default connect(
  mapStatetoProps,
  {
     pushRoute: (route) => actions.pushRoute(route),
     popRoute: () => actions.popRoute()
  }
)(Navigation);
