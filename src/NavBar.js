import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import colors from "./colors";

const Header = styled.header`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }

  span {
    display: inline-block;
    border: 1px solid red;
  }
`;

const NavBar = () => (
  <Header>
    <NavLink to="/">Adopt Me!</NavLink>
    <NavLink to="/search-params">
      <span aria-label="search" role="img">
        🔍
      </span>
    </NavLink>
  </Header>
);

export default NavBar;
