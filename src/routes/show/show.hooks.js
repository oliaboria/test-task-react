import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import getShowById from './show.actions';
import {
    selectIsShowLoading,
    selectShow,
    selectIsShowLoadingFail,
} from './show.selectors';

const useAsyncShow = () => {
    const { showId } = useParams();
    const dispatch = useDispatch();

    const show = useSelector(selectShow);
    const isShowLoading = useSelector(selectIsShowLoading);
    const isShowLoadingFail = useSelector(selectIsShowLoadingFail);

    useEffect(() => {
        dispatch(getShowById(showId));
    }, [showId, dispatch]);

    return { show, isShowLoading, isShowLoadingFail };
};

export default useAsyncShow;
