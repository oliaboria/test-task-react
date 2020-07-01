import {
    selectEpisodesState,
    selectEpisodes,
    selectNumberOfSeasons,
    selectIsEpisodesLoading,
} from '../episodes.selectors';

const createStore = (state) => ({
    episodes: {
        showId: null,
        episodesBySeason: {},
        seasonsNumber: 0,
        isLoading: false,
        isError: false,
        ...state,
    },
});

describe('Episodes selectors', () => {
    const episodesBySeason = { 1: [] };

    it('selectEpisodesState should return show state', () => {
        const store = createStore({ episodesBySeason });

        const res = selectEpisodesState(store);
        expect(res).toEqual(store.episodes);
    });

    it('selectEpisodes should return show', () => {
        const store = createStore({ episodesBySeason });

        const res = selectEpisodes(store);
        expect(res).toEqual(episodesBySeason);
    });

    it('selectNumberOfSeasons should return seasonsNumber', () => {
        const seasonsNumber = 1;
        const store = createStore({ episodesBySeason, seasonsNumber });

        const res = selectNumberOfSeasons(store);
        expect(res).toEqual(seasonsNumber);
    });

    it('selectIsEpisodesLoading should return loading state', () => {
        const isLoading = true;
        const store = createStore({ episodesBySeason, isLoading });

        const res = selectIsEpisodesLoading(store);
        expect(res).toEqual(isLoading);
    });
});
