import mockShow from '../../../mocks/show';
import {
    loadShowAction,
    loadShowSuccessAction,
    loadShowFailAction,
} from '../show.actions';
import showReducer from '../show.reducer';

describe('Show reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            id: null,
            show: {},
            isLoading: false,
            isError: false,
        };
    });

    it('should handle LOAD_SHOW', () => {
        const action = loadShowAction(mockShow.id);

        expect(showReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            id: mockShow.id,
        });
    });

    it('should handle LOAD_SHOW_SUCCESS', () => {
        const action = loadShowSuccessAction(mockShow);

        expect(showReducer(initialState, action)).toEqual({
            id: null,
            show: mockShow,
            isLoading: false,
            isError: false,
        });
    });

    it('should handle LOAD_SHOW_FAIL', () => {
        const error = 'Error';
        const action = loadShowFailAction(error);

        expect(showReducer(initialState, action)).toEqual({
            ...initialState,
            error,
            isError: true,
            isLoading: false,
        });
    });

    it('should return initial state', () => {
        const action = {};

        expect(showReducer(undefined, action)).toEqual(initialState);
    });
});
