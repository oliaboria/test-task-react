import PropTypes from 'prop-types';
import React from 'react';

import './_description.scss';

const Description = ({ text }) => (
    <div dangerouslySetInnerHTML={{ __html: text }} className="description" />
);

Description.propTypes = {
    text: PropTypes.string.isRequired,
};

Description.defaultProps = {
    text: '',
};

export default Description;
