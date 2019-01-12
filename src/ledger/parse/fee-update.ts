
import BigNumber from 'bignumber.js'
import {dropsToJbc} from '../../common'

function parseFeeUpdate(tx: any) {
  const baseFeeDrops = (new BigNumber(tx.BaseFee, 16)).toString()
  return {
    baseFeeJBC: dropsToJbc(baseFeeDrops),
    referenceFeeUnits: tx.ReferenceFeeUnits,
    reserveBaseJBC: dropsToJbc(tx.ReserveBase),
    reserveIncrementJBC: dropsToJbc(tx.ReserveIncrement)
  }
}

export default parseFeeUpdate
