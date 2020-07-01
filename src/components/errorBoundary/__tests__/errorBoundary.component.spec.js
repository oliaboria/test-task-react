import { mount } from 'enzyme';
import React from 'react';

import ErrorMessage from '../../errorMessage';
import ErrorBoundary from '../errorBoundary.component';

const Something = () => null;

describe('ErrorBoundary component', () => {
    it('should display an ErrorMessage if wrapped component throws', () => {
        const wrapper = mount(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>,
        );

        const error = new Error('test');

        wrapper.find(Something).simulateError(error);
        expect(wrapper.state()).toHaveProperty('hasError', true);
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });
});
