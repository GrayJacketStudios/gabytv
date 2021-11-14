import {
    CHANGE_VIEW, 
    REVERT_VIEW,
    UPDATE_DISPLAY_SETTING
} from "../types/viewTypes";

const initialState: ViewState = {
    currentPage: "home",
    previousPage: [],
    displaySettings: {
        showListView: false,
    }
};

export default function viewReducer(state: ViewState = initialState, action: ViewAction): ViewState {
    switch(action.type){
        case CHANGE_VIEW:
            if (typeof action.payload === "string")
                return { ...state, previousPage: [...state.previousPage, state.currentPage], currentPage: action.payload };
            return state;
        case REVERT_VIEW:
            if (typeof action.payload === "string"){
               let updatedPreviousPage = [...state.previousPage];
                updatedPreviousPage.pop();
                return { ...state,  currentPage: state.previousPage[state.previousPage.length - 1], previousPage: updatedPreviousPage }; 
            }
            return state;
            
        case UPDATE_DISPLAY_SETTING:
            if (typeof action.payload === "string")
                return state;
            return { ...state, displaySettings: { ...state.displaySettings, [action.payload.setting]: action.payload.value } };
    }
    return state;
}