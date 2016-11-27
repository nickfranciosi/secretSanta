import { connect } from "react-redux";
import Navigation from "./component";

const mapStatetoProps = (state) => {
  return {
    navigation: state.navReducer,
  }
}

export default connect(mapStatetoProps)(Navigation);
