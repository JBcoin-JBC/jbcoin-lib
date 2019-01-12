import { FormattedSettings } from '../common/types/objects';
import { JbcoinAPI } from '../api';
export declare type SettingsOptions = {
    ledgerVersion?: number;
};
export declare function parseAccountFlags(value: number, options?: {
    excludeFalse?: boolean;
}): {};
export declare function getSettings(this: JbcoinAPI, address: string, options?: SettingsOptions): Promise<FormattedSettings>;
