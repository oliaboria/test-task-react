import { shape, number, arrayOf } from 'prop-types';
import React from 'react';

import './_episodes.scss';

import episodeType from '../../../types/episode.type';

import EpisodeList from './episodeList';

const Episodes = ({ episodes, seasonsNumber }) => {
    return (
        <>
            {Array(seasonsNumber)
                .fill(seasonsNumber)
                .map((_, index) => {
                    const numberOfSeason = index + 1;

                    return (
                        <section
                            key={`season-${numberOfSeason}`}
                            className="episodes">
                            <h3 className="episodes-title">
                                Season {numberOfSeason}
                            </h3>
                            <EpisodeList episodes={episodes[numberOfSeason]} />
                        </section>
                    );
                })}
        </>
    );
};

Episodes.propTypes = {
    episodes: shape({
        [number]: arrayOf(episodeType),
    }).isRequired,
    seasonsNumber: number.isRequired,
};

Episodes.defaultProps = {
    episodes: {},
    seasonsNumber: 0,
};

export default Episodes;
