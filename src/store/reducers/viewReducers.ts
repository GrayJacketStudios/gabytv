import {
    CHANGE_VIEW
} from "../types/viewTypes";

const initialState: ViewState = {
    currentPage: "home",
    previousPage: "home"
};

export default function viewReducer(state: ViewState = initialState, action: ViewAction): ViewState {
    switch(action.type){
        case CHANGE_VIEW:
            return { ...state, previousPage: state.currentPage, currentPage: action.payload };
    }
    return state;
}