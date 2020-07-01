import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import ErrorMessage from '../../../components/errorMessage';
import Loader from '../../../components/loader';
import mockEpisodeDetail from '../../../mocks/episodeDetail';
import EpisodeDetail from '../episodeDetail.component';
import useAsyncEpisodeDetail from '../episodeDetail.hooks';

jest.mock('../episodeDetail.hooks');

describe('Episode Detail page', () => {
    it('should render loading state', () => {
        useAsyncEpisodeDetail.mockImplementation(() => ({
            episode: null,
            isEpisodeLoading: true,
            isEpisodeLoadingFail: false,
        }));

        const wrapper = shallow(<EpisodeDetail />);
        expect(wrapper.find(Loader)).toHaveLength(1);
    });

    it('should render error state', async () => {
        useAsyncEpisodeDetail.mockImplementation(() => ({
            episode: null,
            isEpisodeLoading: false,
            isEpisodeLoadingFail: true,
        }));

        const wrapper = shallow(<EpisodeDetail />);
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });

    it('should render card component', () => {
        useAsyncEpisodeDetail.mockImplementation(() => ({
            episode: mockEpisodeDetail,
            isEpisodeLoading: false,
            isEpisodeLoadingFail: false,
        }));

        const wrapper = shallow(<EpisodeDetail />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
