import { SET_LOCATION } from "../../actions";
import locationReducer from "../location";

test("locationReducer", () => {
  expect(
    locationReducer("Seattle, WA", {
      type: SET_LOCATION,
      payload: "San Francisco, CA"
    })
  ).toBe("San Francisco, CA");
});
