import * as actions from './actionTypes';

export const loadCharacters = (chars) => {
    return {
        type: actions.LOAD_CHARACTERS,
        payload: chars
    }
}

export const deleteCharacters = () => {
    return {
        type: actions.DELETE_CHARACTERS
    }
}

export const toggleLoading = () => {
    return {
        type: actions.TOGGLE_LOADING
    }
}