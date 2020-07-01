import { API_BASE_URL } from '../../../constants';
import request from '../request';

const path = 'shows/111';

describe('#request util', () => {
    afterEach(() => {
        fetch.resetMocks();
    });
    it('should requst data and handle success status', async () => {
        const mockResponse = { data: true };
        fetch.mockResponseOnce(async () => JSON.stringify(mockResponse));

        const resp = await request(path);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            `${API_BASE_URL}/${path}`,
            undefined,
        );

        expect(resp).toEqual(mockResponse);
    });

    it('should requst data and handle error status', async () => {
        fetch.mockResponseOnce(async () => JSON.stringify({ data: false }), {
            status: 404,
        });

        await expect(request(path)).rejects.toThrow('Error');
    });
});
