import {
    selectEpisodeDetailState,
    selectEpisodeDetail,
    selectIsEpisodeDetailLoading,
    selectIsEpisodeDetailLoadingFail,
} from '../episodeDetail.selectors';

const createStore = (state) => ({
    episodeDetail: {
        episodeId: null,
        episode: {},
        isLoading: false,
        isError: false,
        ...state,
    },
});

describe('EpisodeDetail selectors', () => {
    const episode = { episodeId: 1 };

    it('selectEpisodeDetailState should return show state', () => {
        const store = createStore({ episode });

        const res = selectEpisodeDetailState(store);
        expect(res).toEqual(store.episodeDetail);
    });

    it('selectEpisodeDetail should return show', () => {
        const store = createStore({ episode });

        const res = selectEpisodeDetail(store);
        expect(res).toEqual(episode);
    });

    it('selectIsEpisodeDetailLoading should return loading state', () => {
        const isLoading = true;
        const store = createStore({ episode, isLoading });

        const res = selectIsEpisodeDetailLoading(store);
        expect(res).toEqual(isLoading);
    });

    it('selectIsEpisodeDetailLoadingFail should return error state', () => {
        const isError = true;
        const store = createStore({ episode, isError });

        const res = selectIsEpisodeDetailLoadingFail(store);
        expect(res).toEqual(isError);
    });
});
