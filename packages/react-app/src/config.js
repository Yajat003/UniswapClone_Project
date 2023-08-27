import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x5F368F25a9b4219BCb89DF9B1890000a5eEadDE9"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/onhcEGi8ji2DmFzlpBRZB85FHz3UtVvB",
  },
};
