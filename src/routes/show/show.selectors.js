export const selectShowState = (state) => state.show;

export const selectShow = (state) => selectShowState(state).show;

export const selectIsShowLoading = (state) => selectShowState(state).isLoading;

export const selectIsShowFail = (state) => selectShowState(state).isError;
