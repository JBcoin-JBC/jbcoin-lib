declare const txFlags: {
    Universal: {
        FullyCanonicalSig: number;
    };
    AccountSet: {
        RequireDestTag: number;
        OptionalDestTag: number;
        RequireAuth: number;
        OptionalAuth: number;
        DisallowJBC: number;
        AllowJBC: number;
    };
    TrustSet: {
        SetAuth: number;
        NoJbcoin: number;
        SetNoJbcoin: number;
        ClearNoJbcoin: number;
        SetFreeze: number;
        ClearFreeze: number;
    };
    OfferCreate: {
        Passive: number;
        ImmediateOrCancel: number;
        FillOrKill: number;
        Sell: number;
    };
    Payment: {
        NoJbcoinDirect: number;
        PartialPayment: number;
        LimitQuality: number;
    };
    PaymentChannelClaim: {
        Renew: number;
        Close: number;
    };
};
declare const txFlagIndices: {
    AccountSet: {
        asfRequireDest: number;
        asfRequireAuth: number;
        asfDisallowJBC: number;
        asfDisableMaster: number;
        asfAccountTxnID: number;
        asfNoFreeze: number;
        asfGlobalFreeze: number;
        asfDefaultJbcoin: number;
        asfDepositAuth: number;
    };
};
export { txFlags, txFlagIndices };
