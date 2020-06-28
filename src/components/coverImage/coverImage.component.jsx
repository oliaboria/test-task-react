import PropTypes from 'prop-types';
import React from 'react';

import noImg from './no-img.png';

const CoverImage = ({ img }) => (
    <figure>
        <img src={img} alt="Cover Image" />
    </figure>
);

CoverImage.propTypes = {
    img: PropTypes.string,
};

CoverImage.defaultProps = {
    img: noImg,
};

export default CoverImage;
