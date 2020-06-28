import React from 'react';

import './_episodeDetail.scss';

import Card from '../../components/card';
import Loader from '../../components/loader';

import useAsyncEpisodeDetail from './episodeDetail.hooks';

const EpisodeDetail = () => {
    const { episode, isEpisodeLoading } = useAsyncEpisodeDetail();

    return (
        <>
            {isEpisodeLoading && <Loader />}

            {!isEpisodeLoading && episode ? (
                <div className="episode-detail">
                    <Card card={episode} />
                </div>
            ) : null}
        </>
    );
};

export default EpisodeDetail;
