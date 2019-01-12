import * as utils from './utils'
const toJbcoindAmount = utils.common.toJbcoindAmount
import {validate, iso8601ToJbcoinTime} from '../common'
import {Instructions, Prepare} from './types'
import {Amount} from '../common/types/objects'

export type CheckCreate = {
  destination: string,
  sendMax: Amount,
  destinationTag?: number,
  expiration?: string,
  invoiceID?: string
}

function createCheckCreateTransaction(account: string,
  check: CheckCreate
): object {
  const txJSON: any = {
    Account: account,
    TransactionType: 'CheckCreate',
    Destination: check.destination,
    SendMax: toJbcoindAmount(check.sendMax)
  }

  if (check.destinationTag !== undefined) {
    txJSON.DestinationTag = check.destinationTag
  }

  if (check.expiration !== undefined) {
    txJSON.Expiration = iso8601ToJbcoinTime(check.expiration)
  }

  if (check.invoiceID !== undefined) {
    txJSON.InvoiceID = check.invoiceID
  }

  return txJSON
}

function prepareCheckCreate(address: string,
  checkCreate: CheckCreate,
  instructions: Instructions = {}
): Promise<Prepare> {
  validate.prepareCheckCreate(
    {address, checkCreate, instructions})
  const txJSON = createCheckCreateTransaction(
    address, checkCreate)
  return utils.prepareTransaction(txJSON, this, instructions)
}

export default prepareCheckCreate
