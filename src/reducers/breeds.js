import { SET_BREEDS } from "../actions";

export default function breedsReducer(state = [], action) {
  if (action.type === SET_BREEDS) {
    return action.payload;
  } else {
    return state;
  }
}
