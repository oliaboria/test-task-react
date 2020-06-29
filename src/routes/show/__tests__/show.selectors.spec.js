import {
    selectShowState,
    selectShow,
    selectIsShowLoading,
    selectIsShowLoadingFail,
} from '../show.selectors';

const createStore = (state) => ({
    show: {
        id: null,
        show: null,
        isLoading: false,
        isError: false,
        ...state,
    },
});

describe('Show selectors', () => {
    const show = { id: 1 };

    it('selectShowState should return show state', () => {
        const store = createStore({ show });

        const res = selectShowState(store);
        expect(res).toEqual(store.show);
    });

    it('selectShow should return show', () => {
        const store = createStore({ show });

        const res = selectShow(store);
        expect(res).toEqual(show);
    });

    it('selectIsShowLoading should return loading state', () => {
        const isLoading = true;
        const store = createStore({ show, isLoading });

        const res = selectIsShowLoading(store);
        expect(res).toEqual(isLoading);
    });

    it('selectIsShowLoadingFail should return error state', () => {
        const isError = true;
        const store = createStore({ show, isError });

        const res = selectIsShowLoadingFail(store);
        expect(res).toEqual(isError);
    });
});
