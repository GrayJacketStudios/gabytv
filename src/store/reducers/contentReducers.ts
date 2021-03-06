import {
    UPDATE_CONTENT_STATE,
    SET_ACTIVE_CONTENT,
    SEARCH_CONTENT,
} from "../types/contentTypes";

import dummyData from "../../utils/dummys/contentData.json";


/**
 * Funcion para rellenar el state con los datos dummy del json
 */
export const loadDummyData = (): IContent[] => {
    let contents: IContent[] = [];
    dummyData.forEach((content) => {
        let newContent: IContent = {
            id: content.id,
            title: content.title,
            synopsis: content.synopsis,
            photo: content.photo,
            type: content.type as "Film" | "Series" | "Program" | "Commercial Spot",
            duration: content.duration,
            chapter: content.chapter,
            };
        contents.push(newContent);
    });
    return contents;
}

const initialState: ContentState = {
    contents: loadDummyData(),
    activeContent: {
        id: "",
        title: "",
        synopsis: "",
        photo: "",
        type: "Film",
        duration: 0,
        chapter: 0,
    },
    search: "",
};

export default function contentReducer(state: ContentState = initialState, action: ContentAction): ContentState {
    switch(action.type){
        case UPDATE_CONTENT_STATE:
            if (typeof action.payload === "string")
                return state;
            return { ...state, contents: [ ...action.payload ] };
        case SET_ACTIVE_CONTENT:
            if (typeof action.payload === "string")
                return state;
            return { ...state, activeContent: action.payload[0] };
        case SEARCH_CONTENT:
            if (typeof action.payload === "string")
                return {...state, search: action.payload};
            return {...state, search: ""};
    }
    return state;
}