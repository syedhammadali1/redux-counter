import { combineReducers, createStore } from "redux";

const rootReducers = combineReducers({
    counter
})

const store = createStore(rootReducers);

export default store;