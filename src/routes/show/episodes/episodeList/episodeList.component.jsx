import PropTypes from 'prop-types';
import React from 'react';

import './_episodeList.scss';

import episodeType from '../../../../types/episode.type';
import Episode from '../episode';

const EpisodeList = ({ episodes }) => {
    return (
        <table className="episodes-list">
            <thead className="episodes-list-head">
                <tr>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody className="episodes-list-body">
                {episodes.map((episode) => {
                    return <Episode episode={episode} key={episode.id} />;
                })}
            </tbody>
        </table>
    );
};

EpisodeList.propTypes = {
    episodes: PropTypes.arrayOf(episodeType).isRequired,
};

EpisodeList.defaultProps = {
    episodes: [],
};

export default EpisodeList;
