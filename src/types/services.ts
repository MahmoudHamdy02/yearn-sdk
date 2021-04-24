import { BigNumber } from "@ethersproject/bignumber";

import { Address } from "../common";
import { Token } from "./asset";

export interface GasPrice {
  standard: number;
  instant: number;
  fast: number;
}

export interface Balance {
  address: Address;
  token: Token;
  symbol: string;
  balance: BigNumber;
  balanceUSD: BigNumber;
  price: BigNumber;
}

export type BalancesMap<T extends Address> = { [K in T]: Balance[] };

export interface Apy {
  recommended: number;
  composite: boolean;
  type: string;
  description: string;
  data?: Record<string, unknown>;
}

export type ApiVault = Record<string, unknown>;
