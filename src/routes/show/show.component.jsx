import React from 'react';

import CoverImage from '../../components/coverImage';
import Description from '../../components/description';
import Loader from '../../components/loader';
import Title from '../../components/title';

import useAsyncShow from './show.hooks';

const Show = () => {
    const { show, isLoading } = useAsyncShow();

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && show ? (
                <>
                    <Title text={show.name} />
                    <CoverImage img={show.image} medium />
                    <Description text={show.summary} />
                </>
            ) : null}
        </>
    );
};

export default Show;
