import checkPropTypes from "check-prop-types";

/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} value
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
