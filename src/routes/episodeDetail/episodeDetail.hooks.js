import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import getEpisodeDetailById from './episodeDetail.actions';
import {
    selectIsEpisodeDetailLoading,
    selectEpisodeDetail,
    selectIsEpisodeDetailLoadingFail,
} from './episodeDetail.selectors';

const useAsyncEpisodeDetail = () => {
    const { episodeId } = useParams();
    const dispatch = useDispatch();

    const episode = useSelector(selectEpisodeDetail);
    const isEpisodeLoading = useSelector(selectIsEpisodeDetailLoading);
    const isEpisodeLoadingFail = useSelector(selectIsEpisodeDetailLoadingFail);

    useEffect(() => {
        dispatch(getEpisodeDetailById(episodeId));
    }, [episodeId, dispatch]);

    return { episode, isEpisodeLoading, isEpisodeLoadingFail };
};

export default useAsyncEpisodeDetail;
