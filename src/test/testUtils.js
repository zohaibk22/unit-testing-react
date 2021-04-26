/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} value
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};
