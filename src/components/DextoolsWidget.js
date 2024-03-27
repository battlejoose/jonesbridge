import React from 'react';

const DextoolsWidget = () => {
    return (
        <div>
            <iframe
                id="dextools-widget"
                title="DEXTools Trading Chart"
                width="500"
                height="400"
                src="https://www.dextools.io/widget-chart/en/solana/pe-light/F7SjY53cr4vSJu3PboTFh3cQrkHqTJoxfrNf5wJPLApV?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false"
                style={{ border: 0}}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DextoolsWidget;
