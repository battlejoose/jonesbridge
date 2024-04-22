import React from 'react';
import ParchmentScroll from './parchmentScroll.svg'; // Adjust the path as needed

const DextoolsWidget = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '400px'
        }}>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/F7SjY53cr4vSJu3PboTFh3cQrkHqTJoxfrNf5wJPLApV?t=1711581712501"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                   display: 'inline-block',
                   width: '200px',
                   padding: '10px',
                   borderRadius: '4px',
                   textDecoration: 'none',
                   color: 'black',
                   marginBottom: '10px',
                   backgroundImage: `url(${ParchmentScroll})`, // Set SVG as background
                   backgroundSize: 'cover', // Ensure it covers the button, adjust as necessary
                   backgroundPosition: 'center' // Center the background image
               }}>
                View Full DEXTools Chart
            </a>
            <iframe
                id="dextools-widget"
                title="DEXTools Trading Chart"
                width="400"
                height="400"
                src="https://www.dextools.io/widget-chart/en/solana/pe-light/F7SjY53cr4vSJu3PboTFh3cQrkHqTJoxfrNf5wJPLApV?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false"
                style={{ border: 0 }}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DextoolsWidget;
