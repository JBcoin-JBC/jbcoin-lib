export declare type Amount = {
    value: string;
    currency: string;
    issuer?: string;
    counterparty?: string;
};
export declare type JbcoindAmount = string | Amount;
/**
 * Specification of which currency the account taking the offer would pay/
 * receive, as an object with currency and issuer fields (omit issuer for JBC).
 * Similar to currency amounts.
 */
export interface TakerRequestAmount {
    currency: string;
    issuer?: string;
}
/**
 * A currency-counterparty pair, or just currency if it's JBC.
 */
export declare type Issue = {
    currency: string;
    issuer?: string;
    counterparty?: string;
};
