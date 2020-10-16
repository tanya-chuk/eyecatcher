import React from 'react';
import { Link } from "react-router-dom";
import Routes from './routes/Routes'

function App() {
  return (
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">gallery</Link>
            </li>
            <li>
              <Link to="/create">create</Link>
            </li>
          </ul>
          <Routes />
        </nav>
  );
}

export default App;
