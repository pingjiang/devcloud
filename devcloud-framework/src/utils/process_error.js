import { formatErrorMessage } from './errors';

// new ProcessError(Errors.E400001, {})
export default class ProcessError extends Error {
  constructor(code, params, ...args) {
    super(...args);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProcessError);
    }

    this.code = code;
    this.params = params;
    this.message = ProcessError.formatErrorMessage(code, params);
  }
}

ProcessError.formatErrorMessage = formatErrorMessage;
