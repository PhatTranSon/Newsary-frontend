import { defaultState } from "../default";

import {
    CHANGE_MESSAGE_CONTENT,
    CHANGE_MESSAGE_VISIBILITY,
} from "../mutations/ui";

export function messageReducer(message = defaultState.message, action) {
    let newState;
    switch(action.type) {
        case CHANGE_MESSAGE_CONTENT:
            newState = {
                ...message,
                content: action.content
            }
            break;
        case CHANGE_MESSAGE_VISIBILITY:
            newState = {
                ...message,
                visible: action.visible
            };
            break;
        default:
            newState = message;
    }
    return newState;
}