import changeLocation from "../../changeLocation";

test("changeLocation snapshot", () => {
  expect(changeLocation("Seattle, WA")).toMatchSnapshot();
});
