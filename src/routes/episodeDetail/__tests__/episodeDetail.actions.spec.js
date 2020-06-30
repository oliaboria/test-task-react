import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchEpisodeById } from '../../../api';
import mockEpisodeDetail from '../../../mocks/episodeDetail';
import * as actions from '../episodeDetail.actions';
import * as actionTypes from '../episodeDetail.actionTypes';

jest.mock('../../../api', () => ({
    fetchEpisodeById: jest.fn(async () => mockEpisodeDetail),
}));

describe('Episode detail actions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should dispatch loadEpisodeDetailAction', () => {
        const expectedAction = {
            type: actionTypes.LOAD_EPISODE_DETAIL,
            payload: {
                episodeId: mockEpisodeDetail.id,
                isLoading: true,
                isError: false,
            },
        };

        expect(actions.loadEpisodeDetailAction(mockEpisodeDetail.id)).toEqual(
            expectedAction,
        );
    });

    it('should dispatch loadEpisodeDetailSuccessAction', () => {
        const expectedAction = {
            type: actionTypes.LOAD_EPISODE_DETAIL_SUCCESS,
            payload: {
                episode: mockEpisodeDetail,
                isLoading: false,
            },
        };

        expect(
            actions.loadEpisodeDetailSuccessAction(mockEpisodeDetail),
        ).toEqual(expectedAction);
    });

    it('should dispatch loadEpisodeDetailError', () => {
        const error = 'Error';

        const expectedAction = {
            type: actionTypes.LOAD_EPISODE_DETAIL_FAIL,
            payload: {
                error,
                isLoading: false,
                isError: true,
            },
        };

        expect(actions.loadEpisodeDetailFailAction(error)).toEqual(
            expectedAction,
        );
    });

    describe('getShowById', () => {
        const middlewares = [thunk];
        const mockStore = createMockStore(middlewares);
        const store = mockStore();

        it('should dispatch success action if request is complete', async () => {
            await store.dispatch(actions.default(mockEpisodeDetail.id));
            const actualActions = store
                .getActions()
                .map((action) => action.type);
            expect(actualActions).toContain(
                actionTypes.LOAD_EPISODE_DETAIL_SUCCESS,
            );
        });

        it('should dispatch error action if request is failed', async () => {
            fetchEpisodeById.mockImplementation(async () =>
                Promise.reject(new Error('Error')),
            );

            await store.dispatch(actions.default(mockEpisodeDetail.id));
            const actualActions = store
                .getActions()
                .map((action) => action.type);

            expect(actualActions).toContain(
                actionTypes.LOAD_EPISODE_DETAIL_FAIL,
            );
        });
    });
});
