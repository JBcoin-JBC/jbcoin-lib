
import {txFlagIndices} from './txflags'

// Ordering from https://developers.jbcoin.com/accountroot.html
const accountRootFlags = {

  // lsfDefaultJbcoin:
  // Enable rippling on trust lines by default.
  // Required for issuing addresses; discouraged for others.
  DefaultJbcoin: 0x00800000,

  // lsfDepositAuth:
  // Require account to auth deposits.
  // This account can only receive funds from transactions it sends,
  // or preauthorized accounts.
  DepositAuth: 0x01000000,

  // lsfDisableMaster:
  // Force regular key.
  // Disallows use of the master key.
  DisableMaster: 0x00100000,

  // lsfDisallowJBC:
  // Disallow sending JBC.
  // Not enforced by jbcoind; client applications should check.
  DisallowJBC: 0x00080000,

  // lsfGlobalFreeze:
  // Trustlines globally frozen.
  GlobalFreeze: 0x00400000,

  // lsfNoFreeze:
  // Permanently disallowed freezing trustlines.
  // Once enabled, cannot be disabled.
  NoFreeze: 0x00200000,

  // lsfPasswordSpent:
  // Password set fee is spent.
  // The account has used its free SetRegularKey transaction.
  PasswordSpent: 0x00010000,

  // lsfRequireAuth:
  // Require authorization to hold IOUs (issuances).
  RequireAuth: 0x00040000,

  // lsfRequireDestTag:
  // Require a DestinationTag for incoming payments.
  RequireDestTag: 0x00020000
}

const AccountFlags = {
  passwordSpent: accountRootFlags.PasswordSpent,
  requireDestinationTag: accountRootFlags.RequireDestTag,
  requireAuthorization: accountRootFlags.RequireAuth,
  depositAuth: accountRootFlags.DepositAuth,
  disallowIncomingJBC: accountRootFlags.DisallowJBC,
  disableMasterKey: accountRootFlags.DisableMaster,
  noFreeze: accountRootFlags.NoFreeze,
  globalFreeze: accountRootFlags.GlobalFreeze,
  defaultJbcoin: accountRootFlags.DefaultJbcoin
}

const AccountFlagIndices = {
  requireDestinationTag: txFlagIndices.AccountSet.asfRequireDest,
  requireAuthorization: txFlagIndices.AccountSet.asfRequireAuth,
  depositAuth: txFlagIndices.AccountSet.asfDepositAuth,
  disallowIncomingJBC: txFlagIndices.AccountSet.asfDisallowJBC,
  disableMasterKey: txFlagIndices.AccountSet.asfDisableMaster,
  enableTransactionIDTracking: txFlagIndices.AccountSet.asfAccountTxnID,
  noFreeze: txFlagIndices.AccountSet.asfNoFreeze,
  globalFreeze: txFlagIndices.AccountSet.asfGlobalFreeze,
  defaultJbcoin: txFlagIndices.AccountSet.asfDefaultJbcoin
}

const AccountFields = {
  EmailHash: {name: 'emailHash', encoding: 'hex',
    length: 32, defaults: '0'},
  MessageKey: {name: 'messageKey'},
  Domain: {name: 'domain', encoding: 'hex'},
  TransferRate: {name: 'transferRate', defaults: 0, shift: 9}
}

export {
  AccountFields,
  AccountFlagIndices,
  AccountFlags
}
