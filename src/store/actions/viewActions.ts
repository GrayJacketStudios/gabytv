import {
    CHANGE_VIEW
} from "../types/viewTypes"

const updateViewState = (page: string): ViewAction => {
    return {
        type: CHANGE_VIEW,
        payload: page
    }
}

export const updateView = (page: string = 'home') => {
    return updateViewState(page);
}

export const goBackView = () => {
    return (dispatch: any, getState: any) => {
        const { viewReducer: previousPage } = getState();
        dispatch(updateViewState(previousPage));
    }
}


