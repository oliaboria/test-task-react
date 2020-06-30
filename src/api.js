import { API_SHOWS_PATH, API_EPISODES_PATH } from './constants';
import request from './utils/request';

export const fetchShowById = async (showId) =>
    request(`${API_SHOWS_PATH}/${showId}`);

export const fetchEpisodeList = async (showId) =>
    request(`${API_SHOWS_PATH}/${showId}/${API_EPISODES_PATH}`);

export const fetchEpisodeById = async (episodeId) =>
    request(`${API_EPISODES_PATH}/${episodeId}`);
