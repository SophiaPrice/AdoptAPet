import locationReducer from "../reducers/location";

test("locationReducer", () => {
  expect(
    locationReducer("Seattle, WA", {
      type: "SET_LOCATION",
      payload: "San Francisco, CA"
    })
  ).toBe("San Francisco, CA");
});
