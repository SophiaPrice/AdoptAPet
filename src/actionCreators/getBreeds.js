import pf from "petfinder-client";
import { SET_BREEDS } from "../actions";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getBreeds() {
  // returned function is thunk
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();

    if (animal) {
      petfinder.breed
        .list({
          animal: animal
        })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            dispatch({
              type: SET_BREEDS,
              payload: data.petfinder.breeds.breed
            });
          } else {
            dispatch({
              type: SET_BREEDS,
              payload: []
            });
          }
        })
        .catch(console.error); // eslint-disable-line
    } else {
      dispatch({
        type: SET_BREEDS,
        payload: []
      });
    }
  };
}
