import { Memo } from '../../common/types/objects';
declare function adjustQualityForJBC(quality: string, takerGetsCurrency: string, takerPaysCurrency: string): string;
declare function parseQuality(quality?: number | null): number | undefined;
declare function parseTimestamp(jbcoinTime?: number | null): string | undefined;
declare function isPartialPayment(tx: any): boolean;
declare function parseOutcome(tx: any): any | undefined;
declare function hexToString(hex: string): string | undefined;
declare function parseMemos(tx: any): Array<Memo> | undefined;
export { parseQuality, parseOutcome, parseMemos, hexToString, parseTimestamp, adjustQualityForJBC, isPartialPayment };
