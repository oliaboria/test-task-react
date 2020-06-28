import { number, object, string, shape } from 'prop-types';

export const episodeType = shape({
    airdate: string,
    airstamp: string,
    airtime: string,
    id: number.isRequired,
    image: shape({
        medium: string,
        original: string,
    }),
    name: string.isRequired,
    number: number.isRequired,
    runtime: number,
    season: number.isRequired,
    summary: string,
    url: string,
    _links: object,
});

export default episodeType;
