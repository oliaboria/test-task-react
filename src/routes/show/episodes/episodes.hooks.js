import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import getEpisodesByShowId from './episodes.actions';
import {
    selectIsEpisodesLoading,
    selectEpisodes,
    selectNumberOfSeasons,
} from './episodes.selectors';

const useAsyncEpisodes = () => {
    const { showId } = useParams();
    const dispatch = useDispatch();

    const episodes = useSelector(selectEpisodes);
    const seasonsNumber = useSelector(selectNumberOfSeasons);
    const isEpisodesLoading = useSelector(selectIsEpisodesLoading);

    useEffect(() => {
        dispatch(getEpisodesByShowId(showId));
    }, [showId, dispatch]);

    return { episodes, seasonsNumber, isEpisodesLoading };
};

export default useAsyncEpisodes;
