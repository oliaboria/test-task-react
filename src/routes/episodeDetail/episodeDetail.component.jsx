import React from 'react';

import './_episodeDetail.scss';

import Card from '../../components/card';
import ErrorMessage from '../../components/errorMessage';
import Loader from '../../components/loader';

import useAsyncEpisodeDetail from './episodeDetail.hooks';

const EpisodeDetail = () => {
    const {
        episode,
        isEpisodeLoading,
        isEpisodeLoadingFail,
    } = useAsyncEpisodeDetail();

    const isError = !isEpisodeLoading && isEpisodeLoadingFail;

    console.log(episode);

    return (
        <>
            {isEpisodeLoading && <Loader />}

            {isError && <ErrorMessage />}

            {!isEpisodeLoading && (
                <div className="episode-detail">
                    <Card card={episode} />
                </div>
            )}
        </>
    );
};

export default EpisodeDetail;
