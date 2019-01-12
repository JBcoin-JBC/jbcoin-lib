import * as common from '../../common'
import {Amount, JbcoindAmount} from '../../common/types/objects'


function parseAmount(amount: JbcoindAmount): Amount {
  if (typeof amount === 'string') {
    return {
      currency: 'JBC',
      value: common.dropsToJbc(amount)
    }
  }
  return {
    currency: amount.currency,
    value: amount.value,
    counterparty: amount.issuer
  }
}

export default parseAmount
