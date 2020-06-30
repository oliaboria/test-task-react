import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import logger from '../../utils/logger';
import ErrorMessage from '../errorMessage';

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    // eslint-disable-next-line class-methods-use-this
    componentDidCatch(error) {
        logger.error('Error Boundary: ', error);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        return hasError ? <ErrorMessage /> : children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default ErrorBoundary;
