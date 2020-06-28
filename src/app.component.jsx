import React from 'react';

import './_app.scss';

import AppRouter from './routes';

const App = () => (
    <div className="app-container">
        <AppRouter />
    </div>
);

export default App;
