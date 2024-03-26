import React, { useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import WormholeBridge from '@wormhole-foundation/wormhole-connect';

import HeaderWithTextAndImage from './components/HeaderWithTextAndImage';

//import ThorSwapComponent from './components/ThorSwapComponent';

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
          endpoint: "https://api.mainnet-beta.solana.com",
          strictTokenList: false,
          formProps: {
            initialInputMint: "So11111111111111111111111111111111111111112",
            initialOutputMint: "GCVS6j6Y4JTF1x58dVWwDduzP94SMKCkhMQkQdMf1E4X",
          },
        });
      };
    };

    if (!document.querySelector('script[src="https://terminal.jup.ag/main-v2.js"]')) {
      loadJupiterScript();
    }

  }, []);

  return (
      <div className="App">
        <HeaderWithTextAndImage />
        <header className="App-header">
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
            <div className="Uniswap" style={{ flex: 1 }}>
              <SwapWidget/>
            </div>
            <div style={{ flex: 1 }}>
              <WormholeBridge config={{"env":"mainnet","mode":"dark","bridgeDefaults":{"fromNetwork":"ethereum","toNetwork":"solana","token":"USDCeth"},"pageHeader":"","showHamburgerMenu":false}} />
            </div>
            <div id="integrated-terminal" style={{ flex: 1 }}></div>
          </div>
        </header>
        <p>This site and meme coin are parody and satire and not associated with INFOWARS or Alex Jones.</p>
      </div>
  );
}

export default App;
