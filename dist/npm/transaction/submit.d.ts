import { JbcoinAPI } from '..';
export interface FormattedSubmitResponse {
    resultCode: string;
    resultMessage: string;
}
declare function submit(this: JbcoinAPI, signedTransaction: string): Promise<FormattedSubmitResponse>;
export default submit;
