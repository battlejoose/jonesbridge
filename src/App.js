import React, { useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import WormholeBridge from '@wormhole-foundation/wormhole-connect';
import ThorSwapComponent from './components/ThorSwapComponent';

function App() {

  useEffect(() => {
    const loadJupiterScript = () => {
      const script = document.createElement('script');
      script.src = 'https://terminal.jup.ag/main-v2.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://solana-api.projectserum.com",
        });
      };
    };

    if (!document.querySelector('script[src="https://terminal.jup.ag/main-v2.js"]')) {
      loadJupiterScript();
    }

  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
            <div className="Uniswap" style={{ flex: 1 }}>
              <SwapWidget width={500}/>
            </div>
            <div style={{ flex: 1 }}>
              <WormholeBridge config={{"env":"mainnet","mode":"dark","pageHeader":"","showHamburgerMenu":false}} />
            </div>
            <div id="integrated-terminal" style={{ flex: 1 }}></div>
          </div>
          <ThorSwapComponent />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
