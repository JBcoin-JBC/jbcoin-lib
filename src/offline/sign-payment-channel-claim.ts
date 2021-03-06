import * as common from '../common'
import keypairs = require('ripple-keypairs')
import binary = require('ripple-binary-codec')
const {validate, jbcToDrops} = common

function signPaymentChannelClaim(channel: string, amount: string,
  privateKey: string
): string {
  validate.signPaymentChannelClaim({channel, amount, privateKey})

  const signingData = binary.encodeForSigningClaim({
    channel: channel,
    amount: jbcToDrops(amount)
  })
  return keypairs.sign(signingData, privateKey)
}

export default signPaymentChannelClaim
