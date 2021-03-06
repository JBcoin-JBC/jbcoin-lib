import { JbcoinAPI } from './api';
declare class JbcoinAPIBroadcast extends JbcoinAPI {
    ledgerVersion: number | undefined;
    private _apis;
    constructor(servers: any, options: any);
    onLedgerEvent(ledger: any): void;
    getMethodNames(): string[];
}
export { JbcoinAPIBroadcast };
