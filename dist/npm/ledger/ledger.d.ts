import { FormattedLedger } from './parse/ledger';
import { JbcoinAPI } from '../api';
export declare type GetLedgerOptions = {
    ledgerHash?: string;
    ledgerVersion?: number;
    includeAllData?: boolean;
    includeTransactions?: boolean;
    includeState?: boolean;
};
declare function getLedger(this: JbcoinAPI, options?: GetLedgerOptions): Promise<FormattedLedger>;
export default getLedger;
