import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import Loader from '../loader.component';

describe('Loader component', () => {
    it('should render loader', () => {
        const wrapper = shallow(<Loader />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
