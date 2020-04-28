/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import Card from "../components/Card";

const styles = css`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

export default () => {

    return (
        <div css={styles}>
        <h1></h1>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
    )

}