import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { DATE_FORMAT, ROUTES_PATH } from '../../../../constants';
import episodeType from '../../../../types/episode.type';

function Episode({ episode, showId }) {
    const { number, airdate, name, season } = episode;

    return (
        <tr>
            <td>{number}</td>
            <td>{format(new Date(airdate), DATE_FORMAT)}</td>
            <td>
                <Link
                    to={{
                        pathname: `${ROUTES_PATH.show}/${showId}${ROUTES_PATH.episode}`,
                        search: `?season=${season}&number=${number}`,
                    }}
                    className="episode-link">
                    {name}
                </Link>
            </td>
        </tr>
    );
}

Episode.propTypes = {
    episode: episodeType.isRequired,
    showId: PropTypes.number.isRequired,
};

export default Episode;
