import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CommentReducer } from "./comment/Reducer";
import { compose } from "redux";
const rootReducer=combineReducers({
    CommentReducer
});
const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
export const store= legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));