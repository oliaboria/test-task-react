import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import ErrorBoundary from '../components/errorBoundary';

import EpisodeDetail from './episodeDetail';
import Show from './show';

const DEFAULT_ROUTE = 'shows/6771';

const AppRouter = () => {
    return (
        <Router>
            <ErrorBoundary>
                <Switch>
                    <Route
                        exact
                        path="/shows/:showId/episodes/:episodeId"
                        component={EpisodeDetail}
                    />
                    <Route exact path="/shows/:showId" component={Show} />
                    <Redirect from="*" to={DEFAULT_ROUTE} />
                </Switch>
            </ErrorBoundary>
        </Router>
    );
};

export default AppRouter;
