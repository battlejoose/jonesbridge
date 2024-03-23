import React, { useState, useEffect } from 'react';
import { Chain, createSwapKit, WalletOption } from '@swapkit/sdk';

const MetaMaskWalletComponent = () => {
    const [client, setClient] = useState(null);
    const [balance, setBalance] = useState('0');

    const connectChains = [Chain.Ethereum, Chain.Bitcoin, Chain.THORChain]

    // Instantiate and configure the SwapKit client
    useEffect(() => {
        const swapKitClient = createSwapKit({
            config: {
                // Configuration options here, if needed
                    ethplorerApiKey: "EK-qYSX7-hkyJCUf-Uy9bG",
            },
        });
        console.log('SwapKit Client Initialized');
        setClient(swapKitClient);
    }, []);

    // Connect the MetaMask wallet
    const connectMetaMaskWallet = async () => {
        if (!client) return;

        try {
            await client.connectEVMWallet([Chain.Ethereum], WalletOption.METAMASK);
            console.log('MetaMask Wallet Connected');
            fetchWalletBalance();
        } catch (error) {
            console.error('Failed to connect MetaMask wallet:', error);
        }
    };

    // Fetch wallet balance
    // This is a simplified example. Adjust according to your asset type and SDK's methods.
    const fetchWalletBalance = async () => {
        if (!client) return;
        console.log("fetching balances");
        try {
            const wallets = await Promise.all(connectChains.map(client.getWalletByChain));

            console.log(wallets)
            // [{ balance: AssetAmount[]; address: string; walletType: WalletOption }]
        } catch (error) {
            console.error('Failed to fetch wallet balance:', error);
        }
    };

    return (
        <div>
            <button onClick={connectMetaMaskWallet}>Connect MetaMask Wallet</button>
            <div>
                <h3>Balance:</h3>
                <input type="text" readOnly value={balance} />
            </div>
        </div>
    );
};

export default MetaMaskWalletComponent;
