import { API_SHOWS_PATH, API_EPISODES_PATH } from '../../constants';
import request from '../../utils/request';
import * as api from '../api';

const mockResponse = { data: true };

jest.mock('../../utils/request', () =>
    jest.fn(() => Promise.resolve(mockResponse)),
);

const showId = 111;

describe('API tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('#fetchShowById', () => {
        it('should trigger fetching show by id', async () => {
            const res = await api.fetchShowById(showId);

            expect(request).toHaveBeenCalledTimes(1);
            expect(request).toHaveBeenCalledWith(`${API_SHOWS_PATH}/${showId}`);

            expect(res).toEqual(mockResponse);
        });
    });

    describe('#fetchEpisodeList', () => {
        it('should trigger fetching episodes by showId', async () => {
            const res = await api.fetchEpisodeList(showId);

            expect(request).toHaveBeenCalledTimes(1);
            expect(request).toHaveBeenCalledWith(
                `${API_SHOWS_PATH}/${showId}/${API_EPISODES_PATH}`,
            );

            expect(res).toEqual(mockResponse);
        });
    });

    describe('#fetchEpisodeById', () => {
        it('should trigger fetching episode by id', async () => {
            const episodeId = 123;
            const res = await api.fetchEpisodeById(episodeId);

            expect(request).toHaveBeenCalledTimes(1);
            expect(request).toHaveBeenCalledWith(
                `${API_EPISODES_PATH}/${episodeId}`,
            );

            expect(res).toEqual(mockResponse);
        });
    });
});
