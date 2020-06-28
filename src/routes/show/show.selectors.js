export const selectShowState = (state) => state.show;

export const selectShow = (state) => selectShowState(state).show;

export const isShowLoading = (state) => selectShowState(state).isLoading;
