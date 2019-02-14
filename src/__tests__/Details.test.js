import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

// expect this to stay the same over time (assumes first run to be correct)
// to update expected snapshot test run `npx jest -u`
test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});
