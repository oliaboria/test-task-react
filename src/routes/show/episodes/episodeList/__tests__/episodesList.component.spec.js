import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import mockEpisodes from '../../../../../mocks/episodes';
import EpisodeList from '../episodeList.component';

describe('EpisodeList component', () => {
    it('should render episodes list table', () => {
        const wrapper = shallow(<EpisodeList episodes={mockEpisodes} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
