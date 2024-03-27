import React, { useEffect} from 'react';
import './App.css';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import WormholeBridge from '@wormhole-foundation/wormhole-connect';

import HeaderWithTextAndImage from './components/HeaderWithTextAndImage';
import DextoolsWidget from './components/DextoolsWidget'; // Adjust the path according to your file structure


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
          endpoint: "https://mainnet.helius-rpc.com/?api-key=805bb8c7-07ee-49cd-8831-a46e48f259f2",
          strictTokenList: false,
          containerstyles: {},
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
        <p>Battle the globalists! Join the fight for Free Speech and Freedom on the blockchain!</p>
        <p>Solana: GCVS6j6Y4JTF1x58dVWwDduzP94SMKCkhMQkQdMf1E4X</p>
        <a href="https://t.me/infowarsonsol" target="_blank" rel="noopener noreferrer">Join our Telegram</a>
        <div className="widgets-container">
            <div id="integrated-terminal" className="widget-wrapper"></div>
            <div className="widget-wrapper">
              <DextoolsWidget />
            </div>
        </div>
        <p>This site and meme coin are parody and satire and not associated with INFOWARS or Alex Jones. This token is simply a meme coin with no intrinsic value or expectation of financial return.</p>
      </div>
  );
}

export default App;
