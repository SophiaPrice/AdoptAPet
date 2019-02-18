import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

// expect this to stay the same over time (assumes first run to be correct)
// to update expected snapshot test run `npx jest -u`
test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

// test Component Method
test("shows modal when toggleModal is called", () => {
  const c = create(<Details search={() => {}} />);
  const instance = c.getInstance();

  expect(instance.state.showModal).toBe(false);

  instance.toggleModal();

  expect(instance.state.showModal).toBe(true);
});
