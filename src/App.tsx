import React from 'react';
import Helmet from 'react-helmet';
import './App.css';
import githubIcon from './res/github-icon.svg';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home - Ricimon</title>
        <meta name="description" content="Ricimon's personal website" />
      </Helmet>
      <div className="App-main">
        <h1><span>
          Hi! I'm <span className="Decorated-below" data-content="(ree-see-mon)">Ricimon</span>
        </span></h1>
        <h3>Welcome to my construction zone. 🚧</h3>
      </div>
      <div className="Social-icons">
        <a href="https://github.com/ricimon" target="_blank" rel="noopener noreferrer"><img src={githubIcon} className="Social-icon" alt="github" /></a>
      </div>
    </div>
  );
}

export default App;
