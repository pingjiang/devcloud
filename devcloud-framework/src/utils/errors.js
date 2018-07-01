import template from './string_template';

const errors = {
  E400000: 'bad request',
  E400001: '%s is required',
};

export default errors;

export function formatErrorMessage(errorCode, params) {
  const message = errors[errorCode] || `Error code is ${errorCode}`;
  return template(message, params);
}
