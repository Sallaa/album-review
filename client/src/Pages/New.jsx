/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from 'react-router-dom';
import Button from '../components/button';
import {auth} from '../firebase';
import React, {useState} from 'react';

const input = css`
  input[type='text'],
  input[type='email'],
  input[type='password'] {
    border-style: solid;
    outline: none;
    width: 30%;
    padding: 10px 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: #4864d9;
    border-radius: 4px;
    font-size: 20px;
    transition-duration: 0.3s;
  }

  input[type='text'],
  input[type='email'],
  input[type='password']:focus {
    border-color: rgb(36, 66, 184);
  }

  a {
    margin-top: 1rem;
    color: rgb(36, 66, 184);
    text-decoration: underline;
  }

  .emoji {
    text-decoration: none;
    display: inline-block;
  }

  .error {
    color: red;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

  div > h1 {
    align-self: center;
  }

  form > input {
    align-self: center;
  }

  form > button {
    align-self: center;
  }

  div > a {
    align-self: center;
  }
  div > p {
    align-self: center;
  }
`;

const inline = css`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  vertical-align: middle;

  h2 {
    width: 120px;
    text-align: right;
    margin-right: 10px;
  }

  span {
    width: 120px;
    display: inline-block;
  }

  textarea {
    border: 2px solid;
    width: 30%;
    padding: 10px 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: #4864d9;
    border-radius: 4px;
    font-size: 20px;
    transition-duration: 0.3s;
  }
`;

export default () => {
  // TODO states

  return (
    <div css={input}>
      <div css={input}>
        <h1>New Review</h1>
        <form css={input}>
          <div css={inline}>
            <h2>Album:</h2>
            <input name="album" type="text" />
            <span></span>
          </div>
          {/* Reviewer info autofill based on login */}
          <div css={inline}>
            <h2>Artist:</h2>
            <input name="artist" type="text" />
            <span></span>
          </div>

          <div css={inline}>
            <h2>Review:</h2>
            <textarea name="review_body" cols="40" rows="5"></textarea>
            <span></span>
          </div>
          <Button text={'Add Review'} />
        </form>
      </div>
    </div>
  );
};
