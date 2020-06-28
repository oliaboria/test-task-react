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
    const { id } = useParams();
    const dispatch = useDispatch();

    const show = useSelector(selectShow);
    const isShowLoading = useSelector(selectIsShowLoading);
    const isShowLoadingFail = useSelector(selectIsShowLoadingFail);

    useEffect(() => {
        dispatch(getShowById(id));
    }, [id, dispatch]);

    return { show, isShowLoading, isShowLoadingFail };
};

export default useAsyncShow;
