import PropTypes from 'prop-types';
import React from 'react';

import episodeType from '../../../types/episode.type';

import Episode from './episode';

const EpisodeList = ({ episodes, showId }) => {
    return (
        <table className="episodes">
            <thead className="episodes-head">
                <tr>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody className="episodes-body">
                {episodes.map((episode) => {
                    return (
                        <Episode
                            episode={episode}
                            key={episode.id}
                            showId={showId}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

EpisodeList.propTypes = {
    episodes: PropTypes.arrayOf(episodeType).isRequired,
    showId: PropTypes.number.isRequired,
};

EpisodeList.defaultProps = {
    episodes: [],
    showId: null,
};

export default EpisodeList;
