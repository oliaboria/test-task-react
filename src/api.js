import { API_SHOWS_PATH, API_EPISODES_PATH } from './constants';
import request from './utils/request';

export const fetchShowById = async (showId) => {
    try {
        const show = await request(`${API_SHOWS_PATH}/${showId}`);

        return show;
    } catch (error) {
        throw new Error(error);
    }
};

export const fetchEpisodeList = async (showId) => {
    try {
        const episodeList = await request(
            `${API_SHOWS_PATH}/${showId}/${API_EPISODES_PATH}`,
        );

        return episodeList;
    } catch (error) {
        throw new Error(error);
    }
};
