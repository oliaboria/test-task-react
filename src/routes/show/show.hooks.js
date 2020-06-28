import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import getShowById from './show.actions';
import { isShowLoading, selectShow } from './show.selectors';

const useAsyncShow = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const show = useSelector(selectShow);
    const isLoading = useSelector(isShowLoading);

    useEffect(() => {
        dispatch(getShowById(id));
    }, [id]);

    return { show, isLoading };
};

export default useAsyncShow;
