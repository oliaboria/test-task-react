import { bool, string, shape } from 'prop-types';
import React from 'react';

import './_coverImage.scss';

import noImg from './no-img.png';

const CoverImage = ({ img, medium }) => {
    const imgUrl = medium ? img.medium : img.original;

    return (
        <figure className="cover-image">
            <img src={imgUrl} alt="Cover" />
        </figure>
    );
};

CoverImage.propTypes = {
    img: shape({
        medium: string,
        original: string,
    }).isRequired,
    medium: bool,
};

CoverImage.defaultProps = {
    img: {
        medium: noImg,
        original: noImg,
    },
    medium: false,
};

export default CoverImage;
