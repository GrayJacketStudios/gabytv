import {
    UPDATE_CONTENT_STATE
} from "../types/contentTypes"

const updateContentState = (contents: IContent[]): ContentAction => {
    return {
        type: UPDATE_CONTENT_STATE,
        payload: contents
    }
}

export const addContent = (content: IContent) => {
    return (dispatch: any, getState: any) => {
        const { contentReducer: { contents }}: { contentReducer: ContentState } = getState();
        dispatch(updateContentState([...contents, content]))
    }
}

export const editContent = (content: IContent) => {
    return (dispatch: any, getState: any) => {
        const { contentReducer: { contents }}: { contentReducer: ContentState } = getState();
        const contentIndex = contents.findIndex((cont: IContent) => cont.id === content.id);
        dispatch(updateContentState(
            [
                ...contents.slice(0, contentIndex),
                content,
                ...contents.slice(contentIndex+1)
            ])
        );
    }
}

export const removeContent = (content: IContent) => {
    return (dispatch: any, getState: any) => {
        const { contentReducer: { contents }}: { contentReducer: ContentState } = getState();
        dispatch(updateContentState(contents.filter((cont: IContent) => cont.id !== content.id)));
    }
}

