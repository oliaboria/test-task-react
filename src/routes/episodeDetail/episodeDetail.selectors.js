export const selectEpisodeDetailState = (state) => state.episodeDetail;

export const selectEpisodeDetail = (state) =>
    selectEpisodeDetailState(state).episode;

export const selectIsEpisodeDetailLoading = (state) =>
    selectEpisodeDetailState(state).isLoading;
