import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import App from '../app.component';

describe('App component', () => {
    it('should render app', () => {
        const wrapper = shallow(<App />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
