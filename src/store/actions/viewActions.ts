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


