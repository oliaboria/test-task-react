import React from 'react';

import CoverImage from '../../components/coverImage';
import Description from '../../components/description';
import Loader from '../../components/loader';
import Title from '../../components/title';

import useAsyncEpisodeDetail from './episodeDetail.hooks';

const EpisodeDetail = () => {
    const { episode, isEpisodeLoading } = useAsyncEpisodeDetail();

    return (
        <>
            {isEpisodeLoading && <Loader />}

            {!isEpisodeLoading && episode ? (
                <>
                    <Title text={episode.name} />
                    <CoverImage img={episode.image} />
                    <Description text={episode.summary} />
                </>
            ) : null}
        </>
    );
};

export default EpisodeDetail;
