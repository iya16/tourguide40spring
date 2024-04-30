 
// frontend/src/Reducer.js
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import new reducer
import { SignupReducer } from "./components/signup/SignupReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: SignupReducer // <--- add it here
  });

export default createRootReducer;