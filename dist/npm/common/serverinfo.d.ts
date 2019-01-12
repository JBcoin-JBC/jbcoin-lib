import { JbcoinAPI } from '../index';
export declare type GetServerInfoResponse = {
    buildVersion: string;
    completeLedgers: string;
    hostID: string;
    ioLatencyMs: number;
    load?: {
        jobTypes: Array<object>;
        threads: number;
    };
    lastClose: {
        convergeTimeS: number;
        proposers: number;
    };
    loadFactor: number;
    peers: number;
    pubkeyNode: string;
    pubkeyValidator?: string;
    serverState: string;
    validatedLedger: {
        age: number;
        baseFeeJBC: string;
        hash: string;
        reserveBaseJBC: string;
        reserveIncrementJBC: string;
        ledgerVersion: number;
    };
    validationQuorum: number;
};
declare function getServerInfo(this: JbcoinAPI): Promise<GetServerInfoResponse>;
declare function getFee(this: JbcoinAPI, cushion?: number): Promise<string>;
export { getServerInfo, getFee };
