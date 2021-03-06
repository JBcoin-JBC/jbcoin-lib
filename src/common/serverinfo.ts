import * as _ from 'lodash'
import {convertKeysFromSnakeCaseToCamelCase} from './utils'
import BigNumber from 'bignumber.js'
import {JbcoinAPI} from '../index'

export type GetServerInfoResponse = {
  buildVersion: string,
  completeLedgers: string,
  hostID: string,
  ioLatencyMs: number,
  load?: {
    jobTypes: Array<object>,
    threads: number
  },
  lastClose: {
    convergeTimeS: number,
    proposers: number
  },
  loadFactor: number,
  peers: number,
  pubkeyNode: string,
  pubkeyValidator?: string,
  serverState: string,
  validatedLedger: {
    age: number,
    baseFeeJBC: string,
    hash: string,
    reserveBaseJBC: string,
    reserveIncrementJBC: string,
    ledgerVersion: number
  },
  validationQuorum: number
}

function renameKeys(object, mapping) {
  _.forEach(mapping, (to, from) => {
    object[to] = object[from]
    delete object[from]
  })
}

function getServerInfo(this: JbcoinAPI): Promise<GetServerInfoResponse> {
  return this.request('server_info').then(response => {
    const info = convertKeysFromSnakeCaseToCamelCase(response.info)
    renameKeys(info, {hostid: 'hostID'})
    if (info.validatedLedger) {
      renameKeys(info.validatedLedger, {
        baseFeeJbc: 'baseFeeJBC',
        reserveBaseJbc: 'reserveBaseJBC',
        reserveIncJbc: 'reserveIncrementJBC',
        seq: 'ledgerVersion'
      })
      info.validatedLedger.baseFeeJBC =
        info.validatedLedger.baseFeeJBC.toString()
      info.validatedLedger.reserveBaseJBC =
        info.validatedLedger.reserveBaseJBC.toString()
      info.validatedLedger.reserveIncrementJBC =
        info.validatedLedger.reserveIncrementJBC.toString()
    }
    return info
  })
}

// This is a public API that can be called directly.
// This is not used by the `prepare*` methods. See `src/transaction/utils.ts`
async function getFee(
  this: JbcoinAPI,
  cushion?: number
): Promise<string> {
  if (cushion === undefined) {
    cushion = this._feeCushion
  }
  if (cushion === undefined) {
    cushion = 1.2
  }

  const serverInfo = (await this.request('server_info')).info
  const baseFeeJbc = new BigNumber(serverInfo.validated_ledger.base_fee_jbc)
  let fee = baseFeeJbc.times(serverInfo.load_factor).times(cushion)

  // Cap fee to `this._maxFeeJBC`
  fee = BigNumber.min(fee, this._maxFeeJBC)
  // Round fee to 6 decimal places
  return (new BigNumber(fee.toFixed(6))).toString(10)
}

export {
  getServerInfo,
  getFee
}
