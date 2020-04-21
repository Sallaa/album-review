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
    margin-right: 2rem;
  }
`;

const css_ul = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  list-style-type: none;
  padding: 1rem;
  margin-top: 0;
`;

export default() => {

    return (
        <nav css={css_nav}>
            <ul css={css_ul}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li css={css ` align-self: flex-end; margin: auto; `}>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );

}