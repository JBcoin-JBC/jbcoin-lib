import BigNumber from 'bignumber.js';
import { Amount, JbcoindAmount } from './types/objects';
declare function isValidSecret(secret: string): boolean;
declare function dropsToJbc(drops: string | BigNumber): string;
declare function jbcToDrops(jbc: string | BigNumber): string;
declare function toJbcoindAmount(amount: Amount): JbcoindAmount;
declare function convertKeysFromSnakeCaseToCamelCase(obj: any): any;
declare function removeUndefined<T extends object>(obj: T): T;
declare function jbcoinTimeToISO8601(jbcoinTime: number): string;
/**
 * @param {string} iso8601 international standard date format
 * @return {number} seconds since jbcoin epoch (1/1/2000 GMT)
 */
declare function iso8601ToJbcoinTime(iso8601: string): number;
export { dropsToJbc, jbcToDrops, toJbcoindAmount, convertKeysFromSnakeCaseToCamelCase, removeUndefined, jbcoinTimeToISO8601, iso8601ToJbcoinTime, isValidSecret };
