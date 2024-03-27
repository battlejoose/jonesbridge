import React from 'react';

const DextoolsWidget = () => {
    return (
        <div>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/F7SjY53cr4vSJu3PboTFh3cQrkHqTJoxfrNf5wJPLApV?t=1711581712501"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                   display: 'inline-block',
                   backgroundColor: 'white',
                   padding: '8px',
                   borderRadius: '4px',
                   textDecoration: 'none',
                   color: 'black', // Ensure text color contrasts with white background
                   marginBottom: '10px' // Optional: Adds space between the link and the iframe
               }}>
                View Full DEXTools Chart
            </a>
            <iframe
                id="dextools-widget"
                title="DEXTools Trading Chart"
                width="550"
                height="400"
                src="https://www.dextools.io/widget-chart/en/solana/pe-light/F7SjY53cr4vSJu3PboTFh3cQrkHqTJoxfrNf5wJPLApV?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false"
                style={{ border: 0}}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DextoolsWidget;
