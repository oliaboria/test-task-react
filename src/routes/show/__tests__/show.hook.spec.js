import { renderHook } from '@testing-library/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import mockShow from '../../../mocks/show';
import getShowById from '../show.actions';
import useAsyncShow from '../show.hooks';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
}));
jest.mock('../show.actions', () => jest.fn(() => mockShow));

const mockDispatch = jest.fn();

describe('Rewards hooks', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('useAsyncShow', () => {
        const mockActionFn = jest.fn();
        useParams.mockImplementation(() => ({ showId: mockShow.id }));
        useDispatch.mockImplementation(() => mockDispatch);
        getShowById.mockImplementation(() => mockActionFn);
        const mockedStore = {
            show: {
                id: mockShow.id,
                show: mockShow,
                isLoading: false,
                isError: false,
            },
        };
        useSelector.mockImplementation((callback) => callback(mockedStore));

        it('should dispatch action to load show', async () => {
            renderHook(() => useAsyncShow(mockShow.id));

            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith(mockActionFn);

            expect(getShowById).toHaveBeenCalledTimes(1);
            expect(getShowById).toHaveBeenCalledWith(mockShow.id);
        });

        it('should return loaded data', () => {
            const { result } = renderHook(() => useAsyncShow(mockShow.id));

            expect(result.current).toEqual({
                show: mockedStore.show.show,
                isShowLoading: false,
                isShowLoadingFail: false,
            });
        });
    });
});
