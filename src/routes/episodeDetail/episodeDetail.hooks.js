import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import getEpisodeDetailById from './episodeDetail.actions';
import {
    selectIsEpisodeDetailLoading,
    selectEpisodeDetail,
} from './episodeDetail.selectors';

const useAsyncEpisodeDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const episode = useSelector(selectEpisodeDetail);
    const isEpisodeLoading = useSelector(selectIsEpisodeDetailLoading);

    useEffect(() => {
        dispatch(getEpisodeDetailById(id));
    }, [id, dispatch]);

    return { episode, isEpisodeLoading };
};

export default useAsyncEpisodeDetail;
