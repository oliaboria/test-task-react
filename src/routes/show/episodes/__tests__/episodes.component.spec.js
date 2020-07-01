import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import { mockEpisodesBySeason } from '../../../../mocks/episodes';
import Episodes from '../episodes.component';

describe('Episodes component', () => {
    it('should render episodes', () => {
        const wrapper = shallow(
            <Episodes
                episodes={mockEpisodesBySeason}
                seasonsNumber={Object.keys(mockEpisodesBySeason).length}
            />,
        );
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
