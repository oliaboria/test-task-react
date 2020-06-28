import React from 'react';

import CoverImage from '../../components/coverImage';
import Description from '../../components/description';
import Episodes from '../../components/episodes';
import useAsyncEpisodes from '../../components/episodes/episodes.hooks';
import Loader from '../../components/loader';
import Title from '../../components/title';

import useAsyncShow from './show.hooks';

const Show = () => {
    const { show, isShowLoading } = useAsyncShow();
    const { episodes, isEpisodesLoading, seasonsNumber } = useAsyncEpisodes();

    return (
        <>
            {(isShowLoading || isEpisodesLoading) && <Loader />}

            {!isShowLoading && show ? (
                <>
                    <Title text={show.name} />
                    <CoverImage img={show.image} medium />
                    <Description text={show.summary} />
                </>
            ) : null}

            {!isEpisodesLoading && seasonsNumber > 0 ? (
                <Episodes
                    episodes={episodes}
                    seasonsNumber={seasonsNumber}
                    showId={show.id}
                />
            ) : null}
        </>
    );
};

export default Show;
