import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import ErrorMessage from '../errorMessage.component';

describe('ErrorMessage component', () => {
    it('should render error message', () => {
        const wrapper = shallow(<ErrorMessage />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
