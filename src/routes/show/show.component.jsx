import React from 'react';

import './_show.scss';

import Card from '../../components/card';
import Episodes from '../../components/episodes';
import useAsyncEpisodes from '../../components/episodes/episodes.hooks';
import Error from '../../components/error';
import Loader from '../../components/loader';

import useAsyncShow from './show.hooks';

const Show = () => {
    const { show, isShowLoading, isShowLoadingFail } = useAsyncShow();
    const { episodes, isEpisodesLoading, seasonsNumber } = useAsyncEpisodes();

    return (
        <>
            {(isShowLoading || isEpisodesLoading) && <Loader />}

            {!isShowLoading && isShowLoadingFail && <Error />}

            {!isShowLoading && show ? (
                <div className="show">
                    <Card card={show} />
                </div>
            ) : null}

            {!isEpisodesLoading && show && seasonsNumber > 0 ? (
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
