export const contains = (() => {
  return Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(el => el === value);
})();

export const curryingContains = (arr) => (val) => contains(arr, val);
