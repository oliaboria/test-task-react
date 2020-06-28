import PropTypes from 'prop-types';
import React from 'react';

import './_title.scss';

const Title = ({ text }) => <h1 className="title">{text}</h1>;

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

Title.defaultProps = {
    text: '',
};

export default Title;
