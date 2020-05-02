/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from 'react-router-dom';
import Button from '../components/button';
import {auth} from '../firebase';
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const input = css`
  input {
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

  input:focus {
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
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [rating, setRating] = useState(0);
  const [review_body, setReview_Body] = useState('');
  const [reviewer, setReviewer] = useState('Not Set');

  const [leave, setLeave] = useState(false);

  const addReview = (album, artist, rating, review_body, reviewer) => {
    // TODO if checks
    fetch('/createReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({album, artist, rating, review_body, reviewer})
    }).then((res) => res.text());
    setLeave(true);
  };

  // TODO: check login
  // TODO: validate form and feedback
  // TODO: time added
  return (
    <div css={input}>
      <div css={input}>
        <h1>New Review</h1>
        <form css={input}>
          <div css={inline}>
            <h2>Album:</h2>
            <input
              name="album"
              type="text"
              onChange={(e) => setAlbum(e.target.value)}
            />
            <span></span>
          </div>
          {/* Reviewer info autofill based on login */}
          <div css={inline}>
            <h2>Artist:</h2>
            <input
              name="artist"
              type="text"
              onChange={(e) => setArtist(e.target.value)}
            />
            <span></span>
          </div>

          <div css={inline}>
            <h2>Rating:</h2>
            <input
              name="artist"
              type="number"
              min="0"
              max="5"
              step="0.1"
              onChange={(e) => setRating(e.target.value)}
            />
            <span></span>
          </div>

          <div css={inline}>
            <h2>Review:</h2>
            <textarea
              name="review_body"
              cols="40"
              rows="5"
              onChange={(e) => setReview_Body(e.target.value)}></textarea>
            <span></span>
          </div>
          <Button
            text={'Add Review'}
            onClick={(e) =>
              addReview(album, artist, rating, review_body, reviewer)
            }
          />
        </form>
        {leave ? <Redirect to={'/'} /> : ''}
      </div>
    </div>
  );
};
