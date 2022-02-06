import { combineReducers } from "redux";
import adsReducer from "./ads";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import locationReducer from "./locationReducer";
import catewithadsReducer from "./catewithadsReducer";
import categoryReducer from "./categoryReducer";
import myadsReducer from "./myadsReducer";

const rootReducer = combineReducers({
  // ads: adsReducer,
  auth: authReducer,
  // search: searchReducer,
  // location: locationReducer,
  // catewithads: catewithadsReducer,
  category: categoryReducer,
  myads: myadsReducer,
});

export default rootReducer;
