import mockEpisodeDetail from '../../../mocks/episodeDetail';
import {
    loadEpisodeDetailAction,
    loadEpisodeDetailSuccessAction,
    loadEpisodeDetailFailAction,
} from '../episodeDetail.actions';
import episodeDetailReducer from '../episodeDetail.reducer';

describe('EpisodeDetailReducer reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            episodeId: null,
            episode: {},
            isLoading: false,
            isError: false,
        };
    });

    it('should handle LOAD_EPISODE_DETAIL', () => {
        const action = loadEpisodeDetailAction(mockEpisodeDetail.id);

        expect(episodeDetailReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            episodeId: mockEpisodeDetail.id,
        });
    });

    it('should handle LOAD_EPISODE_DETAIL_SUCCESS', () => {
        const action = loadEpisodeDetailSuccessAction(mockEpisodeDetail);

        expect(episodeDetailReducer(initialState, action)).toEqual({
            episodeId: null,
            episode: mockEpisodeDetail,
            isLoading: false,
            isError: false,
        });
    });

    it('should handle LOAD_EPISODE_DETAIL_FAIL', () => {
        const error = 'Error';
        const action = loadEpisodeDetailFailAction(error);

        expect(episodeDetailReducer(initialState, action)).toEqual({
            ...initialState,
            error,
            isError: true,
            isLoading: false,
        });
    });

    it('should return initial state', () => {
        const action = {};

        expect(episodeDetailReducer(undefined, action)).toEqual(initialState);
    });
});
