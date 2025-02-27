
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Twitter from '@hackernoon/pixel-icon-library/icons/SVG/brands/twitter.svg';

import HomepageHero from './HomepageHero';
import MarioBox from './MarioBox';


function App() {

  const navRef = useRef();
  const [isNavSticky, setIsNavSticky] = useState(false);
  const onAppScroll = (e) => {
    const element = navRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    setIsNavSticky(rect.top <= 100);
  }

  // Check if nav sticky on first load
  useEffect(onAppScroll, [])

  return (
    <div className="App" onScroll={onAppScroll}>
      <HomepageHero />
      <nav ref={navRef} className={isNavSticky ? 'sticky' : ''}>
        <div className="content">
          <a href="/" className="title">
            <span>
              big
            </span>
            <span>
              TEAM
            </span>
          </a>
        </div>
      </nav>
      <main>
        <MarioBox style={{ minHeight: '100vh' }}>
          <div className="container" style={{ minHeight: '100vh' }}>
            <div className="box" style={{ maxWidth: '40rem' }}>
              <h1>We're building something big</h1>
              <p style={{ color: 'white', opacity: '0.75' }}>
                <i>
                  Queer-first gamedev community for friends of friends of friends who just make games
                </i>
              </p>
              <p style={{ color: 'white', opacity: '0.75' }}>
                Wanna make games too?
                <br />
                <a
                  style={{ color: 'yellow', opacity: '0.75', textDecoration: 'underline' }}
                  href="https://discord.gg/w6jEtjGuKA"
                >
                  Join the community!
                </a>
              </p>
              <p style={{ color: 'white', opacity: '0.75' }}>
                Just curious?
                <br />
                <a
                  style={{ color: 'yellow', opacity: '0.75', textDecoration: 'underline' }}
                  href="mailto:contact@bigteam.gg"
                >
                  contact@bigteam.gg
                </a>
              </p>
              <p style={{ color: 'white', opacity: '0.75' }}>
                We're also on:
              </p>
              <p>
                <a
                  style={{ color: 'yellow', opacity: '0.75', textDecoration: 'underline' }}
                  href="https://bsky.app/profile/bigteam.gg"
                >
                  Bluesky
                </a>
              </p>
              <p>
                <a
                  style={{ color: 'yellow', opacity: '0.75', textDecoration: 'underline' }}
                  href="https://twitter.com/bigTEAMvg"
                >
                  Twitter
                </a>
              </p>
              <p>
                <a
                  style={{ color: 'yellow', opacity: '0.75', textDecoration: 'underline' }}
                  href="https://bigteamvg.itch.io"
                >
                  Itch
                </a>
              </p>
              <img
                style={{ width: '2rem', aspectRatio: '1/1', filter: 'opacity(0.5)' }}
                src="logo192.png"
              />
            </div>
          </div>
        </MarioBox>
      </main>
      {/* <HorizontalBannerRuling /> */}
      <footer style={{ display: 'none' }}>
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
