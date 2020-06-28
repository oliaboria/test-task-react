import { API_BASE_URL } from '../../constants';

const request = async (path, options) => {
    try {
        const resp = await fetch(`${API_BASE_URL}/${path}`, options);
        const data = await resp.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export default request;
