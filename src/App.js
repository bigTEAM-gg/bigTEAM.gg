
import React, { useEffect } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="hero">
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
        <div className="skyline" />
      </header>
      <nav>
        <button type="button">
          home
        </button>
        <button type="button">
          about
        </button>
        <button type="button">
          learn more
        </button>
      </nav>
      <main>
        <h1>Welcome to big team</h1>
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
