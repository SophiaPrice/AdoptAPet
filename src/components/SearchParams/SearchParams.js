import React, { Component } from "react";
import Search from "../Search";
import { navigate } from "@reach/router/lib/history";

class SearchParams extends Component {
  handleSearchSubmit() {
    navigate("/");
  }

  render() {
    return (
      <div className="search-route">
        <Search search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
