import React from 'react';

import './_show.scss';

import Card from '../../components/card';
import ErrorMessage from '../../components/errorMessage';
import Loader from '../../components/loader';

import Episodes from './episodes';
import useAsyncEpisodes from './episodes/episodes.hooks';
import useAsyncShow from './show.hooks';

const Show = () => {
    const { show, isShowLoading, isShowLoadingFail } = useAsyncShow();
    const { episodes, isEpisodesLoading, seasonsNumber } = useAsyncEpisodes();

    const isLoading = isShowLoading || isEpisodesLoading;
    const isError = !isLoading && isShowLoadingFail;

    return (
        <>
            {isLoading && <Loader />}

            {!isShowLoading && !isError && (
                <>
                    <div className="show">
                        <Card card={show} />
                    </div>

                    <Episodes
                        episodes={episodes}
                        seasonsNumber={seasonsNumber}
                    />
                </>
            )}

            {isError && <ErrorMessage />}
        </>
    );
};

export default Show;
