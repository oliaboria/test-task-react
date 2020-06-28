export const selectEpisodesState = (state) => state.episodes;

export const selectEpisodes = (state) =>
    selectEpisodesState(state).episodesBySeason;

export const selectNumberOfSeasons = (state) =>
    selectEpisodesState(state).seasonsNumber;

export const selectIsEpisodesLoading = (state) =>
    selectEpisodesState(state).isLoading;
