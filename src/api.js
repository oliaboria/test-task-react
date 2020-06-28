import { API_SHOWS_PATH } from './constants';
import request from './utils/request';

// eslint-disable-next-line import/prefer-default-export
export const fetchShowById = async (id) => {
    try {
        const show = await request(`${API_SHOWS_PATH}/${id}`);
        return show;
    } catch (error) {
        throw new Error(error);
    }
};
