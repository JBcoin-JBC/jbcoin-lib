
import {inspect} from 'util'
import * as browserHacks from './browser-hacks'

class JbcoinError extends Error {

  name: string
  message: string
  data?: any

  constructor(message = '', data?: any) {
    super(message)

    this.name = browserHacks.getConstructorName(this)
    this.message = message
    this.data = data
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  toString() {
    let result = '[' + this.name + '(' + this.message
    if (this.data) {
      result += ', ' + inspect(this.data)
    }
    result += ')]'
    return result
  }

  /* console.log in node uses util.inspect on object, and util.inspect allows
  us to customize its output:
  https://nodejs.org/api/util.html#util_custom_inspect_function_on_objects */
  inspect() {
    return this.toString()
  }
}

class JbcoindError extends JbcoinError {}

class UnexpectedError extends JbcoinError {}

class LedgerVersionError extends JbcoinError {}

class ConnectionError extends JbcoinError {}

class NotConnectedError extends ConnectionError {}

class DisconnectedError extends ConnectionError {}

class JbcoindNotInitializedError extends ConnectionError {}

class TimeoutError extends ConnectionError {}

class ResponseFormatError extends ConnectionError {}

class ValidationError extends JbcoinError {}

class NotFoundError extends JbcoinError {
  constructor(message = 'Not found') {
    super(message)
  }
}

class MissingLedgerHistoryError extends JbcoinError {
  constructor(message?: string) {
    super(message || 'Server is missing ledger history in the specified range')
  }
}

class PendingLedgerVersionError extends JbcoinError {
  constructor(message?: string) {
    super(message || 'maxLedgerVersion is greater than server\'s most recent' +
      ' validated ledger')
  }
}

export {
  JbcoinError,
  UnexpectedError,
  ConnectionError,
  JbcoindError,
  NotConnectedError,
  DisconnectedError,
  JbcoindNotInitializedError,
  TimeoutError,
  ResponseFormatError,
  ValidationError,
  NotFoundError,
  PendingLedgerVersionError,
  MissingLedgerHistoryError,
  LedgerVersionError
}
