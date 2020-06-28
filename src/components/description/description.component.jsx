import PropTypes from 'prop-types';
import React from 'react';

const Description = ({ text }) => (
    <div dangerouslySetInnerHTML={{ __html: text }} />
);

Description.propTypes = {
    text: PropTypes.string.isRequired,
};

Description.defaultProps = {
    text: '',
};

export default Description;
