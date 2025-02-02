import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import episodeDetailReducer from '../routes/episodeDetail/episodeDetail.reducer';
import episodesReducer from '../routes/show/episodes/episodes.reducer';
import showReducer from '../routes/show/show.reducer';

const rootReducer = combineReducers({
    show: showReducer,
    episodes: episodesReducer,
    episodeDetail: episodeDetailReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
