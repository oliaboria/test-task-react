import { format } from 'date-fns';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './_episode.scss';

import { DATE_FORMAT } from '../../../../constants';
import episodeType from '../../../../types/episode.type';

const Episode = ({ episode }) => {
    const { number, airdate, name, season, id } = episode;
    const { showId } = useParams();

    return (
        <tr>
            <td>{number}</td>
            <td>{format(new Date(airdate), DATE_FORMAT)}</td>
            <td>
                <Link
                    to={{
                        pathname: `/shows/${showId}/episodes/${id}`,
                        search: `?season=${season}&number=${number}`,
                    }}
                    className="episode-link">
                    {name}
                </Link>
            </td>
        </tr>
    );
};

Episode.propTypes = {
    episode: episodeType.isRequired,
};

export default Episode;
