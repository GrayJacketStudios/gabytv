import { combineReducers } from "redux"
import contentReducer from "./contentReducers";
import viewReducer from "./viewReducers";

export const rootReducer = combineReducers({
    contentReducer: contentReducer,
    viewReducer: viewReducer
});

export type RootState = ReturnType<typeof rootReducer>;