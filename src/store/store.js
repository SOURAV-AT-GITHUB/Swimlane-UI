import { combineReducers, legacy_createStore } from "redux";
import { errorReducer, todoReducer } from "./reducers";

const rootReducer = combineReducers({
   todos: todoReducer,
    error:errorReducer
})

 export const store = legacy_createStore(rootReducer)