import PropTypes from 'prop-types';
import React from 'react';

import noImg from '../../assets/img/no-img.png';

import './_card.scss';

const Card = ({ card }) => {
    const { name, image, summary } = card;
    const imgUrl = image ? image.medium : noImg;

    return (
        <>
            <h1 className="card-title">{name}</h1>

            <div className="clearfix">
                <figure className="card-image left-column">
                    <img src={imgUrl} alt="Cover" />
                </figure>
                <div
                    dangerouslySetInnerHTML={{ __html: summary }}
                    className="card-description right-column"
                />
            </div>
        </>
    );
};

Card.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.object,
        summary: PropTypes.string,
    }).isRequired,
};

export default Card;
