import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import EpisodeDetail from './episodeDetail';
import { ROUTES, DEFAULT_ROUTE } from './routes.constants';
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
                <Redirect from="*" to={DEFAULT_ROUTE} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
