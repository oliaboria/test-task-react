import {
    LOAD_EPISODE_DETAIL,
    LOAD_EPISODE_DETAIL_SUCCESS,
    LOAD_EPISODE_DETAIL_FAIL,
} from './episodeDetail.actionTypes';

const initialState = {
    episodeId: null,
    episode: {},
    isLoading: false,
    isError: false,
};

function episodeDetailReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_EPISODE_DETAIL:
        case LOAD_EPISODE_DETAIL_SUCCESS:
        case LOAD_EPISODE_DETAIL_FAIL:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default episodeDetailReducer;
