import * as common from '../common'

function isConnected(): boolean {
  return this.connection.isConnected()
}

function getLedgerVersion(): Promise<number> {
  return this.connection.getLedgerVersion()
}

function connect(): Promise<void> {
  return this.connection.connect()
}

function disconnect(): Promise<void> {
  return this.connection.disconnect()
}

function formatLedgerClose(ledgerClose: any): object {
  return {
    baseFeeJBC: common.dropsToJbc(ledgerClose.fee_base),
    ledgerHash: ledgerClose.ledger_hash,
    ledgerVersion: ledgerClose.ledger_index,
    ledgerTimestamp: common.jbcoinTimeToISO8601(ledgerClose.ledger_time),
    reserveBaseJBC: common.dropsToJbc(ledgerClose.reserve_base),
    reserveIncrementJBC: common.dropsToJbc(ledgerClose.reserve_inc),
    transactionCount: ledgerClose.txn_count,
    validatedLedgerVersions: ledgerClose.validated_ledgers
  }
}

export {
  connect,
  disconnect,
  isConnected,
  getLedgerVersion,
  formatLedgerClose
}
