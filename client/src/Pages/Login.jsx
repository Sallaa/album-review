/** @jsx jsx */
import React from "react";
import {jsx, css} from "@emotion/core";
const input = css `
  input[type="text"] {
    border-style: solid;
    outline: none;
    width: 30%;
    padding: 10px 10px;
    margin-right: 5px;
    margin-bottom: 20px;
    border-color: #4864d9;
    border-radius: 4px;
    font-size: 20px;
    transition-duration: 0.3s;
  }

  input[type="text"]:focus {
    border-color: rgb(36, 66, 184);
  }

  button {
    padding: 0.75rem 2rem;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    color: #f2f2f2;
    border-color: transparent;
    background: #4864d9;
    box-shadow: 0px 10px 16px rgba(72, 100, 217, 0.16),
      0px 4px 6px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    transition-duration: 0.3s;
  }

  button:active {
    background: rgb(36, 66, 184);
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`;

const center = css `
  align-self: center;
`;

export default() => {
    return (
        <div css={input}>
            <h1 css={center}>Log In</h1>
            <input css={center} type="text" placeholder="login"/>
            <input css={center} type="text" placeholder="password"/>
            <button css={center}>Log In</button>
        </div>
    );
};
