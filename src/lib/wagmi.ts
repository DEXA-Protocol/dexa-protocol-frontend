import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get environment variables
const projectId = import.meta.env.VITE_PROJECT_ID
// if (!projectId) {
//   throw new Error('VITE_PROJECT_ID is required for WalletConnect. Please add it to your .env file.')
// }

const rpcUrl = import.meta.env.VITE_EDUCHAIN_RPC_URL || 'https://rpc.open-campus-codex.gelato.digital/'
const explorerUrl = import.meta.env.VITE_EDUCHAIN_EXPLORER_URL || 'https://opencampus-codex.blockscout.com/'

// Educhain configuration
const educhain = {
  id: 656476,
  name: 'Educhain',
  nativeCurrency: {
    decimals: 18,
    name: 'EDU',
    symbol: 'EDU',
  },
  rpcUrls: {
    default: { http: [rpcUrl] },
    public: { http: [rpcUrl] },
  },
  blockExplorers: {
    default: { name: 'Educhain Explorer', url: explorerUrl },
  },
}

export const config = getDefaultConfig({
  appName: 'DEXA Protocol',
  projectId,
  chains: [educhain],
  transports: {
    [educhain.id]: http(),
  },
}) 