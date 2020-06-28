export const selectEpisodeDetailState = (state) => state.episodeDetail;

export const selectEpisodeDetail = (state) =>
    selectEpisodeDetailState(state).episode;

export const selectIsEpisodeDetailLoading = (state) =>
    selectEpisodeDetailState(state).isLoading;

export const selectIsEpisodeDetailLoadingFail = (state) =>
    selectEpisodeDetailState(state).isError;
