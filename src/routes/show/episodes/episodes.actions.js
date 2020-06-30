import { fetchEpisodeList } from '../../../api';

import {
    LOAD_EPISODES,
    LOAD_EPISODES_SUCCESS,
    LOAD_EPISODES_FAIL,
} from './episodes.actionTypes';

export const loadEpisodesAction = (showId) => ({
    type: LOAD_EPISODES,
    payload: { showId, isLoading: true, isError: false },
});

export const loadEpisodesSuccessAction = (episodes) => ({
    type: LOAD_EPISODES_SUCCESS,
    payload: { episodes, isLoading: false },
});

export const loadEpisodesFailAction = (error) => ({
    type: LOAD_EPISODES_FAIL,
    payload: { error, isLoading: false, isError: true },
});

const getEpisodesByShowId = (showId) => async (dispatch) => {
    try {
        dispatch(loadEpisodesAction(showId));

        const episodes = await fetchEpisodeList(showId);

        dispatch(loadEpisodesSuccessAction(episodes));
    } catch (err) {
        dispatch(loadEpisodesFailAction(err));
    }
};

export default getEpisodesByShowId;
