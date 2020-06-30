import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchEpisodeList } from '../../../../api';
import mockEpisodes from '../../../../mocks/episodes';
import { mockShowId } from '../../../../mocks/show';
import * as actions from '../episodes.actions';
import * as actionTypes from '../episodes.actionTypes';

jest.mock('../../../../api', () => ({
    fetchEpisodeList: jest.fn(async () => mockEpisodes),
}));

describe('Episodes actions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should dispatch loadEpisodesAction', () => {
        const expectedAction = {
            type: actionTypes.LOAD_EPISODES,
            payload: {
                showId: mockShowId,
                isLoading: true,
                isError: false,
            },
        };

        expect(actions.loadEpisodesAction(mockShowId)).toEqual(expectedAction);
    });

    it('should dispatch loadEpisodesSuccessAction', () => {
        const expectedAction = {
            type: actionTypes.LOAD_EPISODES_SUCCESS,
            payload: {
                episodes: mockEpisodes,
                isLoading: false,
            },
        };

        expect(actions.loadEpisodesSuccessAction(mockEpisodes)).toEqual(
            expectedAction,
        );
    });

    it('should dispatch loadEpisodesError', () => {
        const error = 'Error';

        const expectedAction = {
            type: actionTypes.LOAD_EPISODES_FAIL,
            payload: {
                error,
                isLoading: false,
                isError: true,
            },
        };

        expect(actions.loadEpisodesFailAction(error)).toEqual(expectedAction);
    });

    describe('getEpisodesByShowId', () => {
        const middlewares = [thunk];
        const mockStore = createMockStore(middlewares);
        const store = mockStore();

        it('should dispatch success action if request is complete', async () => {
            await store.dispatch(actions.default(mockShowId));
            const actualActions = store
                .getActions()
                .map((action) => action.type);
            expect(actualActions).toContain(actionTypes.LOAD_EPISODES_SUCCESS);
        });

        it('should dispatch error action if request is failed', async () => {
            fetchEpisodeList.mockImplementation(async () =>
                Promise.reject(new Error('Error')),
            );

            await store.dispatch(actions.default(mockShowId));
            const actualActions = store
                .getActions()
                .map((action) => action.type);

            expect(actualActions).toContain(actionTypes.LOAD_EPISODES_FAIL);
        });
    });
});
