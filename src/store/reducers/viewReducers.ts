import {
    CHANGE_VIEW, 
    REVERT_VIEW
} from "../types/viewTypes";

const initialState: ViewState = {
    currentPage: "home",
    previousPage: []
};

export default function viewReducer(state: ViewState = initialState, action: ViewAction): ViewState {
    switch(action.type){
        case CHANGE_VIEW:
            return { ...state, previousPage: [...state.previousPage, state.currentPage], currentPage: action.payload };
        case REVERT_VIEW:
            let updatedPreviousPage = [...state.previousPage];
            updatedPreviousPage.pop();
            return { ...state,  currentPage: state.previousPage[state.previousPage.length - 1], previousPage: updatedPreviousPage };
    }
    return state;
}