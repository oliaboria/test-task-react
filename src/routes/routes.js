import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { DEFAULT_SHOW_ID } from '../constants';

import EpisodeDetail from './episodeDetail';
import { ROUTES, ROUTES_PATH } from './routes.constants';
import Show from './show';

const ROUTES_MAP = [
    {
        path: ROUTES.episode,
        component: EpisodeDetail,
    },
    {
        path: ROUTES.show,
        component: Show,
    },
];

const AppRouter = () => {
    const defaultRoute = `${ROUTES_PATH.show}/${DEFAULT_SHOW_ID}`;

    return (
        <Router>
            <Switch>
                {ROUTES_MAP.map((route) => (
                    <Route
                        exact
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                <Redirect from="*" to={defaultRoute} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
