import { renderHook } from '@testing-library/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { mockEpisodes, mockEpisodesBySeason } from '../../../../mocks/episodes';
import getEpisodesByShowId from '../episodes.actions';
import useAsyncEpisodes from '../episodes.hooks';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
}));
jest.mock('../episodes.actions', () => jest.fn(() => mockEpisodes));

const mockDispatch = jest.fn();
const mockShowId = 111;

describe('Episodes hooks', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('useAsyncEpisodes', () => {
        const mockActionFn = jest.fn();
        useParams.mockImplementation(() => ({ showId: mockShowId }));
        useDispatch.mockImplementation(() => mockDispatch);
        getEpisodesByShowId.mockImplementation(() => mockActionFn);
        const mockedStore = {
            episodes: {
                showId: mockShowId,
                episodesBySeason: mockEpisodesBySeason,
                seasonsNumber: 1,
                isLoading: false,
                isError: false,
            },
        };
        useSelector.mockImplementation((callback) => callback(mockedStore));

        it('should dispatch action to load show', async () => {
            renderHook(() => useAsyncEpisodes(mockShowId));

            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith(mockActionFn);

            expect(getEpisodesByShowId).toHaveBeenCalledTimes(1);
            expect(getEpisodesByShowId).toHaveBeenCalledWith(mockShowId);
        });

        it('should return loaded data', () => {
            const { result } = renderHook(() => useAsyncEpisodes(mockShowId));

            expect(result.current).toEqual({
                episodes: mockedStore.episodes.episodesBySeason,
                seasonsNumber: 1,
                isEpisodesLoading: false,
            });
        });
    });
});
