import React from 'react';

import './_episodeDetail.scss';

import Card from '../../components/card';
import Error from '../../components/error';
import Loader from '../../components/loader';

import useAsyncEpisodeDetail from './episodeDetail.hooks';

const EpisodeDetail = () => {
    const { episode, isEpisodeLoading, isError } = useAsyncEpisodeDetail();

    return (
        <>
            {isEpisodeLoading && <Loader />}

            {!isEpisodeLoading && isError && <Error />}

            {!isEpisodeLoading && episode ? (
                <div className="episode-detail">
                    <Card card={episode} />
                </div>
            ) : null}
        </>
    );
};

export default EpisodeDetail;
