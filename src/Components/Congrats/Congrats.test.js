import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
import { checkProps, findByTestAttr } from "../../test/testUtils";
// import checkPropTypes from "check-prop-types";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props -Components props specific to this set up
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("Renders without Error", () => {
  const wrapper = setup({ success: false });
  const congrats = findByTestAttr(wrapper, "component-congrats");
  expect(congrats.length).toBe(1);
});

test("renders no text when 'success' prop is false", () => {
  const wrapper = setup({ success: false });
  const congrats = findByTestAttr(wrapper, "component-congrats");
  expect(congrats.text()).toBe("");
});

test("Renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("Does not throw warnign with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
  //   const propError = checkPropTypes(
  //     Congrats.prototype,
  //     expectedProps,
  //     "prop",
  //     Congrats.name
  //   );
  //   expect(propError).toBeUndefined();
});
