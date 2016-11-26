import {
  PUSH_ROUTE,
  POP_ROUTE
} from "./constants";

export const pushRoute = (route) => {
  return {
    type: PUSH_ROUTE,
    route,
  }
}

export const popRoute = () => {
  return {
    type: POP_ROUTE,
  }
}
