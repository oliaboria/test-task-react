import { mockEpisodes, mockEpisodesBySeason } from '../../../../mocks/episodes';
import { mockShowId } from '../../../../mocks/show';
import {
    loadEpisodesAction,
    loadEpisodesSuccessAction,
    loadEpisodesFailAction,
} from '../episodes.actions';
import episodesReducer from '../episodes.reducer';

describe('Episodes reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            showId: null,
            episodesBySeason: {},
            seasonsNumber: 0,
            isLoading: false,
            isError: false,
        };
    });

    it('should handle LOAD_EPISODES', () => {
        const action = loadEpisodesAction(mockShowId);

        expect(episodesReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            showId: mockShowId,
        });
    });

    it('should handle LOAD_EPISODES_SUCCESS', () => {
        const action = loadEpisodesSuccessAction(mockEpisodes);

        expect(episodesReducer(initialState, action)).toEqual({
            showId: null,
            episodesBySeason: mockEpisodesBySeason,
            seasonsNumber: 1,
            isLoading: false,
            isError: false,
        });
    });

    it('should handle LOAD_SHOW_FAIL', () => {
        const error = 'Error';
        const action = loadEpisodesFailAction(error);

        expect(episodesReducer(initialState, action)).toEqual({
            ...initialState,
            error,
            isError: true,
            isLoading: false,
        });
    });

    it('should return initial state', () => {
        const action = {};

        expect(episodesReducer(undefined, action)).toEqual(initialState);
    });
});
