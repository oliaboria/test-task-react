import { ROUTES_PATH, DEFAULT_SHOW_ID } from '../constants';

export const DEFAULT_ROUTE = `${ROUTES_PATH.show}/${DEFAULT_SHOW_ID}`;

export const ROUTES = {
    episode: `${ROUTES_PATH.show}/:id/episodebynumber`,
    show: `${ROUTES_PATH.show}/:id`,
};
