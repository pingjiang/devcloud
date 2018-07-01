export function percent(value) {
  return value != null && typeof value === 'number' ?
    (Math.round(100 * value) + '%') : value;
}
