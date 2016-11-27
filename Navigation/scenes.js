import Home from "../scenes/Home";
import About from "../scenes/About";

const scenes = {
  home: {
    component: Home,
    route: {
      key: 'home',
      title: 'Home'
    }
  },
  about: {
    component: About,
    route: {
      key: 'about',
      title: 'About'
    }
  }
};

export default scenes;
