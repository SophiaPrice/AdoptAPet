import changeLocation from "../../actionCreators/changeLocation";

test("changeLocation snapshot", () => {
  expect(changeLocation("Seattle, WA")).toMatchSnapshot();
});
