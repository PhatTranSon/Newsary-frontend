/* Text highlight mutation */
export const HIGHLIGHT_TEXT_SELECTED = "HIGHLIGHT_TEXT_SELECTED";
export const HIGHLIGHT_TEXT_ERROR = "HIGHLIGHT_TEXT_ERROR";

/* Menu mutation */
export const HIGHLIGHT_MENU_VISIBLE = "HIGHLIGHT_MENU_VISIBLE";
export const HIGHLIGHT_MENU_COORDS = "HIGHLIGHT_MENU_COORDS";

/* Word list mutation */
export const TOGGLE_WORDLIST_VISIBLE = "TOGGLE_WORDLIST_VISIBLE";
export const CHANGE_WORDLIST_VISIBLE = "CHANGE_WORDLIST_VISIBLE";

/* Message mutation */
export const CHANGE_MESSAGE_VISIBILITY = "CHANGE_MESSAGE_VISIBILITY";
export const CHANGE_MESSAGE_CONTENT = "CHANGE_MESSAGE_CONTENT";

/* App started */
export const APP_STARTED = "APP_STARTED";

export function setAppStarted() {
    return {
        type: APP_STARTED
    };
}

export function changeMessageVisibility(visible) {
    return {
        type: CHANGE_MESSAGE_VISIBILITY,
        visible
    };
}

export function changeMessageContent(content) {
    return {
        type: CHANGE_MESSAGE_CONTENT,
        content
    };
}

export function textHighlight(text) {
    return {
        type: HIGHLIGHT_TEXT_SELECTED,
        text
    };
}

export function textHighlightError() {
    return {
        type: HIGHLIGHT_TEXT_ERROR
    };
}

export function changeHighlightMenuVisibility(visible) {
    return {
        type: HIGHLIGHT_MENU_VISIBLE,
        visible
    };
}

export function changeHighlightMenuCoords(coords) {
    return {
        type: HIGHLIGHT_MENU_COORDS,
        x: coords.x,
        y: coords.y
    };
}

export function toggleWordListVisibility() {
    return {
        type: TOGGLE_WORDLIST_VISIBLE
    };
}

export function changeWordListVisibility(visible) {
    return {
        type: CHANGE_WORDLIST_VISIBLE,
        visible
    };
}