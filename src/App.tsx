import React, { FC } from 'react';
import Root from './routes/Root';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

const App: FC = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Root />
    </Router>
  );
};

export default App;
