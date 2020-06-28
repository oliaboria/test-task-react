import { fetchShowById } from '../../api';

import {
    LOAD_SHOW,
    LOAD_SHOW_SUCCESS,
    LOAD_SHOW_FAIL,
} from './show.actionTypes';

export const loadShowAction = (id) => ({
    type: LOAD_SHOW,
    payload: { id, isLoading: true },
});

export const loadShowSuccessAction = (show) => ({
    type: LOAD_SHOW_SUCCESS,
    payload: { show, isLoading: false },
});

export const loadShowFailAction = (error) => ({
    type: LOAD_SHOW_FAIL,
    payload: { error, isLoading: false },
});

const getShowById = (id) => async (dispatch) => {
    try {
        dispatch(loadShowAction(id));

        const show = await fetchShowById(id);

        dispatch(loadShowSuccessAction(show));
    } catch (err) {
        dispatch(loadShowFailAction(err));
    }
};

export default getShowById;
