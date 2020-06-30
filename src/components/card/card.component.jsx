import PropTypes from 'prop-types';
import React from 'react';

import CoverImage from './coverImage';
import Description from './description';
import Title from './title';

const Card = ({ card }) => (
    <>
        <Title text={card.name} />
        <div className="clearfix">
            <CoverImage img={card.image} medium />
            <Description text={card.summary} />
        </div>
    </>
);

Card.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.shape({}),
        summary: PropTypes.string,
    }),
};

Card.defaultProps = {
    card: {},
};

export default Card;
