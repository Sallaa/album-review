/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import Button from '../components/Button';
import {useState} from 'react';
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

  h3 {
    color: #cc3300;
  }

  h2 {
    width: 120px;
    text-align: right;
    margin-right: 10px;
    display: inline;
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

export default ({user}) => {
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');

  console.log('input:\n' + review.replace(/\n/g, '<br/>'));

  const addReview = () => {
    if (
      user != null &&
      album != '' &&
      artist != '' &&
      review != null &&
      rating <= 5 &&
      rating >= 0
    ) {
      const reviewer = user.displayName;
      const add_time = Date.now();
      const review_body = review.replace(/\n/g, '<br/>');
      fetch('/createReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          album,
          artist,
          rating,
          review_body,
          reviewer,
          add_time
        })
      }).then((res) => res.text());
    }
    if (user == null) alert('Please log in first!');
  };

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
              placeholder="album name"
              onChange={(e) => setAlbum(e.target.value)}
              required
            />
            <span></span>
          </div>
          <div css={inline}>
            <h2>Artist:</h2>
            <input
              name="artist"
              type="text"
              placeholder="artist name"
              onChange={(e) => setArtist(e.target.value)}
              required
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
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
            <span></span>
          </div>

          <div css={inline}>
            <h2>Review:</h2>
            <textarea
              required
              name="review"
              placeholder="review body"
              cols="40"
              rows="5"
              onChange={(e) => setReview(e.target.value)}></textarea>
            <span></span>
          </div>
          <Button text={'Add Review'} onClick={(e) => addReview()} />
        </form>
      </div>
    </div>
  );
};
