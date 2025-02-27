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

export interface ItemInfo {
  value: string,
  chainId?: number,
  label: string,
  icon: any,
  width?: string,
  height?: string
};