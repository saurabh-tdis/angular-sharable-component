export interface TableSettings{
  actionRequired?:boolean;
  settings?:ColumnSetting[];
  actions?:ActionSettings[];
}

export interface ColumnSetting {
  key: string;
  header?: string;
  format?: PipeFormat;
  // alternativeKeys?: string[];
}

declare type Identity<T=any>=(raw: T) => T;

export interface ActionSettings {
  title: string;
  // func: any;
  func:  (arg: any) => void;
  class?: string[] | [];
  params?: Object;
}

export enum PipeFormat {
  DEFAULT, // 0
  CURRENCY, // 1
  DATE, // 2
  PERCENTAGE, // 3
}

export interface Customer {
  
  name: string;
  email: string;
  phone: string;
  loyaltyReward: boolean;
  totalSpent: number;
  id?: number;
}
