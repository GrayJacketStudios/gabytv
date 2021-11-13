import { enableChapterControl } from "../../components/FormEditContent/formControl"
import {
    UPDATE_CONTENT_STATE,
    SET_ACTIVE_CONTENT
} from "../types/contentTypes"
import { goBackView } from "./viewActions"

const updateContentState = (contents: IContent[]): ContentAction => {
    return {
        type: UPDATE_CONTENT_STATE,
        payload: contents
    }
}

const addContent = (content: IContent) => {
    return (dispatch: any, getState: any) => {
        const { contentReducer: { contents }}: { contentReducer: ContentState } = getState();
        content.id = generateUUID();
        dispatch(updateContentState([...contents, content]))
        dispatch(goBackView());
    }
}

const editContent = (content: IContent) => {
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
        dispatch(goBackView());
    }
}

export const setCurrentContent = ({id, title, photo, synopsis, type, duration, chapter}: IContent) => {
    return {
        type: SET_ACTIVE_CONTENT,
        payload: [{ 
            id, 
            title, 
            photo, 
            synopsis, 
            type, 
            duration, 
            chapter
        }]
    }
}

export const saveContent = (content: IContent) => {
    if (enableChapterControl(content.type))
        content.chapter = undefined;
    if (content.id && content.id !== "") {
        return editContent(content)
    } else {
        return addContent(content)
    }
}

export const removeContent = (content: IContent) => {
    return (dispatch: any, getState: any) => {
        const { contentReducer: { contents }}: { contentReducer: ContentState } = getState();
        dispatch(updateContentState(contents.filter((cont: IContent) => cont.id !== content.id)));
    }
}

/**
 * Function to generate a UUID, as per https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * This is only used in this test, as it should be generated in the server
 * @returns 
 */
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
}