import { combineReducers } from "redux"
import contentReducer from "./contentReducers";

export const rootReducer = combineReducers({
    contentReducer: contentReducer
});

export type RootState = ReturnType<typeof rootReducer>;