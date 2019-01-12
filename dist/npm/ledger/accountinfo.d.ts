import { JbcoinAPI } from '../api';
export declare type GetAccountInfoOptions = {
    ledgerVersion?: number;
};
export declare type FormattedGetAccountInfoResponse = {
    sequence: number;
    jbcBalance: string;
    ownerCount: number;
    previousInitiatedTransactionID: string;
    previousAffectingTransactionID: string;
    previousAffectingTransactionLedgerVersion: number;
};
export default function getAccountInfo(this: JbcoinAPI, address: string, options?: GetAccountInfoOptions): Promise<FormattedGetAccountInfoResponse>;
