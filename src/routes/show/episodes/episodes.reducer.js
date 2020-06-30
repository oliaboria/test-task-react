import groupBy from 'lodash.groupby';

import {
    LOAD_EPISODES,
    LOAD_EPISODES_SUCCESS,
    LOAD_EPISODES_FAIL,
} from './episodes.actionTypes';

const initialState = {
    showId: null,
    episodesBySeason: {},
    seasonsNumber: 0,
    isLoading: false,
    isError: false,
};

function episodesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_EPISODES:
        case LOAD_EPISODES_FAIL:
            return { ...state, ...action.payload };
        case LOAD_EPISODES_SUCCESS: {
            const { episodes, isLoading } = action.payload;
            const episodesBySeason = groupBy(episodes, 'season');
            const seasonsNumber = Object.keys(episodesBySeason).length;

            return { ...state, episodesBySeason, seasonsNumber, isLoading };
        }
        default:
            return state;
    }
}

export default episodesReducer;
