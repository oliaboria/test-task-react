import { fetchEpisodeById } from '../../api';

import {
    LOAD_EPISODE_DETAIL,
    LOAD_EPISODE_DETAIL_SUCCESS,
    LOAD_EPISODE_DETAIL_FAIL,
} from './episodeDetail.actionTypes';

export const loadEpisodeDetailAction = (episodeId) => ({
    type: LOAD_EPISODE_DETAIL,
    payload: { episodeId, isLoading: true, isError: false },
});

export const loadEpisodeDetailSuccessAction = (episode) => ({
    type: LOAD_EPISODE_DETAIL_SUCCESS,
    payload: { episode, isLoading: false },
});

export const loadEpisodeDetailFailAction = (error) => ({
    type: LOAD_EPISODE_DETAIL_FAIL,
    payload: { error, isLoading: false, isError: true },
});

const getEpisodeDetailById = (episodeId) => async (dispatch) => {
    try {
        dispatch(loadEpisodeDetailAction(episodeId));

        const episode = await fetchEpisodeById(episodeId);

        dispatch(loadEpisodeDetailSuccessAction(episode));
    } catch (err) {
        dispatch(loadEpisodeDetailFailAction(err));
    }
};

export default getEpisodeDetailById;
