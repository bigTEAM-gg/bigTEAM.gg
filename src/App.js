
import React, { useEffect } from 'react';
import './App.css';
import Twitter from '@hackernoon/pixel-icon-library/icons/SVG/brands/twitter.svg';

import HomepageHero from './HomepageHero';

function App() {

  return (
    <div className="App">
      <HomepageHero />
      <nav>
        <div className="content">
          <a href="#home">
            <object data={Twitter} />
            <span className="text">
              About
            </span>
          </a>
          <a href="#about">
          <object data={Twitter} />
            <span className="text">
              Projects
            </span>
          </a>
          <a href="#" className="title">
            <span>
              big
            </span>
            <span>
              TEAM
            </span>
          </a>
          <a href="#learn">
            <object data={Twitter} />
            <span className="text">
              Services
            </span>
          </a>
          <a href="#contact">
            <object data={Twitter} />
            <span className="text">
              Contact
            </span>
          </a>
        </div>
      </nav>
      <main>
        <h1>Welcome to big team</h1>
        {/* <object data={Twitter} width="24" height="24"> </object> */}
      </main>
      {/* <HorizontalBannerRuling /> */}
      <footer>
        <p>follow us on twitter</p>
      </footer>
    </div>
  );
}

const HorizontalBannerRuling = (props) => {
  const { title, bannerStyle } = props;

  return (
    <div className="strips">
      <div className="strip" style={{ backgroundColor: 'brown' }}>

      </div>
      <div className="strip" style={{ backgroundColor: 'green' }}>
        {title}
      </div>
      <div className="strip" style={{ backgroundColor: 'skyblue' }}>

      </div>
    </div>
  );
}

export default App;
