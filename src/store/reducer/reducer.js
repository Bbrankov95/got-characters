export default function reducer (state = {
    chars: [],
    isLoading: false
}, action) {
    switch(action.type) {
        case 'LOAD_CHARACTERS':
            return ({
                ...state,
                chars: action.payload,
            })
        case 'DELETE_CHARACTERS':
            return ({
                ...state,
                chars: [],
                isLoading: false
            })
        case 'TOGGLE_LOADING':
            return ({
                ...state,
                isLoading: !state.isLoading
            })
        default:
            return state;
    }
}