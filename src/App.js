import React, { useEffect} from 'react';
import './App.css';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import WormholeBridge from '@wormhole-foundation/wormhole-connect';
import { Widget, WidgetConfig } from "@rango-dev/widget-embedded";


import HeaderWithTextAndImage from './components/HeaderWithTextAndImage';
import DextoolsWidget from './components/DextoolsWidget'; // Adjust the path according to your file structure


//import ThorSwapComponent from './components/ThorSwapComponent';

function App() {

    // sample widget config
    const config = {

        // your dapp api key in Rango
        // this API key is only for test purpose. Don't use it in production.
        apiKey: 'b138e599-5b43-475a-8e37-ff35b27a51b9',

        // your project wallet connect project id
        // Get your Wallet Connect project id from https://cloud.walletconnect.com/
        walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',

        // override the widget title
        title: "Cross-chain Swaps",

        // affiliate configs
       /* affiliate: {
            // check widget monetization guide
            key: "your affiliate key",
            percent: 1
        },*/

        // the default amount for the swap input
        amount: 1,

        // configuration related to the source blockchain/token input
        from: {
            // limiting blockchains to some specific ones
            // the default blockchain for the source input
            blockchain: 'ETH',
            // the default token for the source input
            token: {
                blockchain: 'ETH',
                address: null,
                symbol: 'ETH'
            }
        },
        // same as above but for the destination blockchain and token
        to: {
            blockchain: 'SOLANA',
            token: {
                blockchain: 'SOLANA',
                address: null,
                symbol: 'SOL'
            }
        },

        // all theme configuration goes here
        theme: {
            // the default theme for the widget
            mode: 'light',
            // overriding the theme colors for dark/light modes
            colors: {
                dark: {
                    neutral: '#434965',
                    primary: '#1C3CF1',
                    secondary: '#2284ED',
                    background: '#070917',
                    foreground: '#FDFDFD',
                    info: '#5BABFF'
                },
                light: {
                    primary: '#1C3CF1',
                    secondary: '#469BF5',
                    neutral: '#e6e6e5',
                    background: '#FDFDFD',
                    foreground: '#010101',
                    info: '#5BABFF'
                }
            },
            // widget box border radius
            borderRadius: 1,
            // widget buttons border radius
            secondaryBorderRadius: 2,
            // passing true for singleTheme will limit the theme only to
            // dark or light based on value passed in 'mode'
            singleTheme: false
        }

    }

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
          <a href="https://t.me/infowarsonsol" target="_blank" rel="noopener noreferrer">Join our Telegram (Community Takeover)</a>
          <div className="widgets-container">
              <div id="integrated-terminal" className="widget-wrapper"></div>
              <div className="widget-wrapper">
                  <DextoolsWidget />
              </div>
          </div>
          {/* Updated section for Rango widget with custom background and "rango" prefixed class names */}
          <div className="rango-widget-background">
              <div className="rango-widget-wrapper">
                  <h2 className="custom-heading">Cross chain Native swaps</h2>
                  <p className="custom-subheading">Aggregate the best swap price through multiple bridges</p>
              </div>
              <div className="rango-widget-wrapper">
                  <Widget config={config}/>
              </div>
          </div>
          <p>This site and meme coin are parody and satire and not associated with INFOWARS or Alex Jones. This token is simply a meme coin with no intrinsic value or expectation of financial return.</p>
      </div>

  );
}

export default App;
