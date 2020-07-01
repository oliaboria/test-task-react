import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { useParams } from 'react-router-dom';

import { mockEpisodes } from '../../../../../mocks/episodes';
import Episode from '../episode.component';

jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
    Link: () => <mock-link />,
}));

describe('Episode component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render episode', () => {
        useParams.mockImplementation(() => ({
            showId: 111,
        }));

        const wrapper = shallow(<Episode episode={mockEpisodes[0]} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
