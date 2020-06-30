import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import ErrorMessage from '../../../components/errorMessage';
import Loader from '../../../components/loader';
import useAsyncEpisodes from '../episodes/episodes.hooks';
import Show from '../show.component';
import useAsyncShow from '../show.hooks';

jest.mock('../show.hooks');
jest.mock('../../../components/episodes/episodes.hooks');

describe('Show', () => {
    it('should render loading state', () => {
        useAsyncShow.mockImplementation(() => ({
            show: null,
            isShowLoading: true,
            isShowLoadingFail: false,
        }));

        useAsyncEpisodes.mockImplementation(() => ({
            episodes: {},
            isEpisodesLoading: true,
            seasonsNumber: 0,
        }));

        const wrapper = shallow(<Show />);
        expect(wrapper.find(Loader)).toHaveLength(1);
    });

    it('should render error state', async () => {
        useAsyncShow.mockImplementation(() => ({
            show: null,
            isShowLoading: false,
            isShowLoadingFail: true,
        }));

        useAsyncEpisodes.mockImplementation(() => ({
            episodes: {},
            isEpisodesLoading: false,
            seasonsNumber: 0,
        }));

        const wrapper = shallow(<Show />);
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });

    it('should render card component', () => {
        useAsyncShow.mockImplementation(() => ({
            show: {},
            isShowLoading: false,
            isShowLoadingFail: false,
        }));

        useAsyncEpisodes.mockImplementation(() => ({
            episodes: {},
            isEpisodesLoading: false,
            seasonsNumber: 0,
        }));

        const wrapper = shallow(<Show />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render card with seasons list', () => {
        useAsyncShow.mockImplementation(() => ({
            show: { id: 111 },
            isShowLoading: false,
            isShowLoadingFail: false,
        }));

        useAsyncEpisodes.mockImplementation(() => ({
            episodes: { '1': { id: '112', name: 'Pilot', season: '1' } },
            isEpisodesLoading: false,
            seasonsNumber: 1,
        }));

        const wrapper = shallow(<Show />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
