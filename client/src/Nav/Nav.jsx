/** @jsx jsx */
import React from "react";
import {jsx, css} from "@emotion/core";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const color = "white";


const css_nav = css`
  background-color: black;
  font-size: 24px;
  display: flex;

  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  li {
    margin-right: 2rem;
  }
`;

const css_ul = css`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
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
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
    );

}