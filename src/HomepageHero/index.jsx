import React from 'react';

import './HomepageHero.css';

const HomepageHero = (props) => {

  return (
    <header className="hero">
      <div className="heroContainer">
        <div className="title">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 450 100"
            preserveAspectRatio="xMinYMid meet"
          >
            {"BIGTEAM".split('').map((letter, i) => (
              <text
                key={i}
                x={450.0 / 7 * (i + 0.5)}
                y="80"
                fontSize="75"
                fill="currentColor"
                textAnchor="middle"
              >
                {letter}
              </text>
            ))}
          </svg>
        </div>
        <div className="zilla">
          <img className="z" src="/monsters/test.webp " />
          <p className="zillaAttribution">Godzilla - Showa Era</p>
        </div>
        <div className="challenger" />
        <div className="roof" />
        <div className="cityScape" />
        <div className="mountains" />
      </div>
      <div className="facade" />
    </header>
  );
}

export default HomepageHero;
