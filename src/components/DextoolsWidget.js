import React from 'react';

const DextoolsWidget = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* Swapping Iframe */}
            <iframe
                id="dextswap-aggregator-widget"
                title="DEXTswap Aggregator"
                width="400"
                height="420"
                src="https://www.dextools.io/widget-aggregator/en/swap/solana/GCVS6j6Y4JTF1x58dVWwDduzP94SMKCkhMQkQdMf1E4X"
                style={{ border: 0, marginRight: '20px' }} // marginRight added for spacing between the iframes
                allowFullScreen
            ></iframe>

            {/* Trading Chart Iframe */}
            <iframe
                id="dextools-widget"
                title="DEXTools Trading Chart"
                width="500"
                height="400"
                src="https://www.dextools.io/widget-chart/en/solana/pe-light/F7SjY53cr4vSJu3PboTFh3cQrkHqTJoxfrNf5wJPLApV?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false"
                style={{ border: 0 }}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DextoolsWidget;
