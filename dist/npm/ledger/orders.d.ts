import { FormattedAccountOrder } from './parse/account-order';
import { JbcoinAPI } from '../api';
export declare type GetOrdersOptions = {
    limit?: number;
    ledgerVersion?: number;
};
export default function getOrders(this: JbcoinAPI, address: string, options?: GetOrdersOptions): Promise<FormattedAccountOrder[]>;
