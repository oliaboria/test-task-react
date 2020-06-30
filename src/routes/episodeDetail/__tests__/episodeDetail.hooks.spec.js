import { renderHook } from '@testing-library/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import mockEpisodeDetail from '../../../mocks/episodeDetail';
import getEpisodeDetailById from '../episodeDetail.actions';
import useAsyncEpisodeDetail from '../episodeDetail.hooks';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
}));
jest.mock('../episodeDetail.actions', () => jest.fn(() => mockEpisodeDetail));

const mockDispatch = jest.fn();

describe('Episode Detail hooks', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('useAsyncEpisodeDetail', () => {
        const mockActionFn = jest.fn();
        useParams.mockImplementation(() => ({
            episodeId: mockEpisodeDetail.id,
        }));
        useDispatch.mockImplementation(() => mockDispatch);
        getEpisodeDetailById.mockImplementation(() => mockActionFn);
        const mockedStore = {
            episodeDetail: {
                episodeId: mockEpisodeDetail.id,
                episode: mockEpisodeDetail,
                isLoading: false,
                isError: false,
            },
        };
        useSelector.mockImplementation((callback) => callback(mockedStore));

        it('should dispatch action to load show', async () => {
            renderHook(() => useAsyncEpisodeDetail(mockEpisodeDetail.id));

            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith(mockActionFn);

            expect(getEpisodeDetailById).toHaveBeenCalledTimes(1);
            expect(getEpisodeDetailById).toHaveBeenCalledWith(
                mockEpisodeDetail.id,
            );
        });

        it('should return loaded data', () => {
            const { result } = renderHook(() =>
                useAsyncEpisodeDetail(mockEpisodeDetail.id),
            );

            expect(result.current).toEqual({
                episode: mockedStore.episodeDetail.episode,
                isEpisodeLoading: false,
                isEpisodeLoadingFail: false,
            });
        });
    });
});
