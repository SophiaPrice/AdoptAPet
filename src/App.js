import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "./SearchContext";
import { Provider as ReduxProvider } from "react-redux";
import pf from "petfinder-client";
import Loadable from "react-loadable";
import NavBar from "./NavBar";
import store from "./store";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>loading split out code ...</h1>;
  }
});

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1>loading split out code ...</h1>;
  }
});

const LoadableSearchParams = Loadable({
  loader: () => import("./SearchParams"),
  loading() {
    return <h1>loading split out code ...</h1>;
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds
    };
  }

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  };

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({
          animal: this.state.animal
        })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({
              breeds: []
            });
          }
        })
        .catch(console.error); // eslint-disable-line
    } else {
      this.setState({
        breeds: []
      });
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <ReduxProvider store={store}>
          <Provider value={this.state}>
            <Router>
              <LoadableResults path="/" />
              <LoadableDetails path="/details/:id" />
              <LoadableSearchParams path="/search-params" />
            </Router>
          </Provider>
        </ReduxProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
