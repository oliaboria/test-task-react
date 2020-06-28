import PropTypes from 'prop-types';
import React from 'react';

const Description = ({ text }) => <p>{text}</p>;

Description.propTypes = {
    text: PropTypes.string.isRequired,
};

Description.defaultProps = {
    text: '',
};

export default Description;
