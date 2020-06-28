import {
    LOAD_SHOW,
    LOAD_SHOW_SUCCESS,
    LOAD_SHOW_FAIL,
} from './show.actionTypes';

const initialState = {
    id: null,
    show: null,
    isLoading: false,
};

function showReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SHOW:
        case LOAD_SHOW_SUCCESS:
        case LOAD_SHOW_FAIL:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default showReducer;
