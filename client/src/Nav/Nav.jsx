/** @jsx jsx */
import React from "react";
import {jsx, css} from "@emotion/core";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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

    return (
        <nav css={css_nav}>
            <ul css={css_ul}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new">Create New</Link>
                </li>
                <li css={css_login}>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );

}