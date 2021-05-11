import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import InputField from "./InputField";

const setup = () => {
  return shallow(<InputField />);
};
describe("Tests for Basic Rendering", () => {
  test("Renders without Error", () => {
    const wrapper = setup();
    let InputFieldContainer = findByTestAttr(wrapper, "component-InputField");
    expect(InputFieldContainer.length).toBe(1);
  });
});
