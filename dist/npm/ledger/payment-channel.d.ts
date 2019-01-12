import { FormattedPaymentChannel } from './parse/payment-channel';
import { JbcoinAPI } from '../api';
declare function getPaymentChannel(this: JbcoinAPI, id: string): Promise<FormattedPaymentChannel>;
export default getPaymentChannel;
