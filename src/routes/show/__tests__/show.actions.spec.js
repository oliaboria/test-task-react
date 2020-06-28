import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchShowById } from '../../../api';
import mockShow from '../../../mocks/show';
import * as actions from '../show.actions';
import * as actionTypes from '../show.actionTypes';

jest.mock('../../../api', () => ({
    fetchShowById: jest.fn(async () => mockShow),
}));

describe('Show actions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should dispatch loadShowAction', () => {
        const expectedAction = {
            type: actionTypes.LOAD_SHOW,
            payload: {
                id: mockShow.id,
                isLoading: true,
                isError: false,
            },
        };

        expect(actions.loadShowAction(mockShow.id)).toEqual(expectedAction);
    });

    it('should dispatch loadShowSuccessAction', () => {
        const expectedAction = {
            type: actionTypes.LOAD_SHOW_SUCCESS,
            payload: {
                show: mockShow,
                isLoading: false,
            },
        };

        expect(actions.loadShowSuccessAction(mockShow)).toEqual(expectedAction);
    });

    it('should dispatch loadRewardsError', () => {
        const error = 'Error';

        const expectedAction = {
            type: actionTypes.LOAD_SHOW_FAIL,
            payload: {
                error,
                isLoading: false,
                isError: true,
            },
        };

        expect(actions.loadShowFailAction(error)).toEqual(expectedAction);
    });

    describe('getShowById', () => {
        const middlewares = [thunk];
        const mockStore = createMockStore(middlewares);
        const store = mockStore();

        it('should dispatch success action if request is complete', async () => {
            await store.dispatch(actions.default(mockShow.id));
            const actualActions = store
                .getActions()
                .map((action) => action.type);
            expect(actualActions).toContain(actionTypes.LOAD_SHOW_SUCCESS);
        });

        it('should dispatch error action if request is failed', async () => {
            fetchShowById.mockImplementation(async () =>
                Promise.reject(new Error('Error')),
            );

            await store.dispatch(actions.default(mockShow.id));
            const actualActions = store
                .getActions()
                .map((action) => action.type);

            expect(actualActions).toContain(actionTypes.LOAD_SHOW_FAIL);
        });
    });
});
