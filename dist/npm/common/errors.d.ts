declare class JbcoinError extends Error {
    name: string;
    message: string;
    data?: any;
    constructor(message?: string, data?: any);
    toString(): string;
    inspect(): string;
}
declare class JbcoindError extends JbcoinError {
}
declare class UnexpectedError extends JbcoinError {
}
declare class LedgerVersionError extends JbcoinError {
}
declare class ConnectionError extends JbcoinError {
}
declare class NotConnectedError extends ConnectionError {
}
declare class DisconnectedError extends ConnectionError {
}
declare class JbcoindNotInitializedError extends ConnectionError {
}
declare class TimeoutError extends ConnectionError {
}
declare class ResponseFormatError extends ConnectionError {
}
declare class ValidationError extends JbcoinError {
}
declare class NotFoundError extends JbcoinError {
    constructor(message?: string);
}
declare class MissingLedgerHistoryError extends JbcoinError {
    constructor(message?: string);
}
declare class PendingLedgerVersionError extends JbcoinError {
    constructor(message?: string);
}
export { JbcoinError, UnexpectedError, ConnectionError, JbcoindError, NotConnectedError, DisconnectedError, JbcoindNotInitializedError, TimeoutError, ResponseFormatError, ValidationError, NotFoundError, PendingLedgerVersionError, MissingLedgerHistoryError, LedgerVersionError };
