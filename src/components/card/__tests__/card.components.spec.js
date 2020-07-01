import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import mockShow from '../../../mocks/show';
import Card from '../card.component';

describe('Card component', () => {
    it('should render card component with fallback image', () => {
        const mockShowWithoutImage = {
            ...mockShow,
            image: null,
        };

        const wrapper = shallow(<Card card={mockShowWithoutImage} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render card component with image', () => {
        const wrapper = shallow(<Card card={mockShow} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
