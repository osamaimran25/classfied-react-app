import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      // thunk,
      createPromise({
        promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"],
      }),
      logger
    )
  )
);
export default store;
