import {
    CHANGE_VIEW,
    REVERT_VIEW
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
    return {
        type: REVERT_VIEW,
        payload: ''
    }
}


