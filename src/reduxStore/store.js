import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {mainReducer} from "./reducers/mainReducer";

let reducers = combineReducers({
    main: mainReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)
));
window.__store__ = store;