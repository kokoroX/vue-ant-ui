export const contains = (() => {
  return Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(el => el === value);
})();

export const curryingContains = (arr) => (val) => contains(arr, val);

/**
 * 获取滚动高度或者宽度
 * @method getScroll
 * @param  {[type]}  w     [description]
 * @param  {[type]}  isTop       [description]
 * @return {[type]}        [description]
 * $author kokoro
 * date 2016-08-06
 */
export function getScroll(w, isTop) {
  let ret = w[`page${isTop ? 'Y' : 'X'}Offset`];
  const method = `scroll${isTop ? 'Top' : 'Left'}`;
  if (typeof ret !== 'number') {
    const d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

/**
 * 获取偏移值
 * @method getOffset
 * @param  {[type]}  element [description]
 * $author kokoro
 * date 2016-08-06
 */
export function getOffset(element) {
  const rect = element.getBoundingClientRect();
  const body = document.body;
  const clientTop = element.clientTop || body.clientTop || 0;
  const clientLeft = element.clientLeft || body.clientLeft || 0;
  const scrollTop = getScroll(window, true);
  const scrollLeft = getScroll(window);

  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  };
}
