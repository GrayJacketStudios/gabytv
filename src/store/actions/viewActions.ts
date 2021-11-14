import {
    CHANGE_VIEW,
    REVERT_VIEW,
    UPDATE_DISPLAY_SETTING
} from "../types/viewTypes"

const updateViewState = (page: string): ViewAction => {
    return {
        type: CHANGE_VIEW,
        payload: page
    }
}

export const updateDisplaySetting = (setting: string, value: any) => {
    return {
        type: UPDATE_DISPLAY_SETTING,
        payload: {
            setting,
            value
        }
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


