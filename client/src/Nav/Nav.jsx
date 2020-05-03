/** @jsx jsx */
import React, { useContext } from "react";
import {jsx, css} from "@emotion/core";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const color = "white";

const css_nav = css `
  background-color: black;
  font-size: 16px;

  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  li {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const css_ul = css `
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  list-style-type: none;
  padding: 1rem;
  margin-top: 0;
`;

const css_login = css `
    margin-left: auto;
`;

export default() => {
  const [user] = useContext(UserContext);
    return (
      <nav css={css_nav}>
        <ul css={css_ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user != null && (
            <li>
              <Link to="/new">Create New</Link>
            </li>
          )}
          {user != null && (
            <li css={css_login}>
              <Link to="/signout">Sign Out</Link>
            </li>
          )}
          {user == null && (
            <li css={css_login}>
              <Link to="/login">Log In</Link>
            </li>
          )}
        </ul>
      </nav>
    );

}