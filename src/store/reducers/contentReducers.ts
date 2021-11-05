import {
    UPDATE_CONTENT_STATE
} from "../types/contentTypes";

const initialState: ContentState = {
    contents: []
};

export default function contentReducer(state: ContentState = initialState, action: ContentAction): ContentState {
    switch(action.type){
        case UPDATE_CONTENT_STATE:
            return { ...state, contents: [ ...action.payload ] };
    }
    return state;
}