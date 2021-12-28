import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authenticationReducer from "./reducers/authentication-reducer";



const reducers = combineReducers({
    authentication: authenticationReducer
});

const DataStore = createStore(reducers, applyMiddleware(thunk));


export default DataStore;