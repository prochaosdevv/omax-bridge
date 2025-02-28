import { PropsWithChildren } from "react";

export interface ExtraTWClassProps {
  className?: string;
}

export type ComponentProps = PropsWithChildren<ExtraTWClassProps>;

export type FormatNumberOptions = {
  prefix?: string;
  suffix?: string;
  thousandSeparator?: boolean | string;
  decimalScale?: number;
  isPercentage?: boolean;
  truncateTinyValue?: boolean;
  useMillify?: boolean;
  placeholder?: string;
};

export interface ModalProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
};

export interface NetworkInfo {
  chainId: number,
  symbol: string,
  label: string,
  bridge: string,
  icon: any,
  width?: string,
  height?: string
};

export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  isNative: boolean;
  fee: number;
  chainId: number;
  icon: any;
}

export interface TokenBalance {
  symbol: string;
  balance: string;
  price: string;
}