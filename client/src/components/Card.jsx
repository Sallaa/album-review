/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import star from '../icons/star.svg';

const css_card = css`
  padding: 1rem;
  margin: auto;
  box-shadow: 0 0 0 0.01px white;
  transition: 0.1s;
  border-radius: 10px;
  margin-bottom: 2rem;
  max-width: 50%;
  min-width: 35%;

  :hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  h2 {
    font-weight: bold;
    color: #4864d9;
    margin-right: 10px;
  }

  .player {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: inherit;
    overflow: hidden;
    background: transparent;
  }

  .ratings {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .rating_score {
    padding-left: 0.25rem;
  }

  .div_score {
    margin-left: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .star {
    height: 20px;
    width: 20px;
    vertical-align: middle;
  }

  .right {
    text-align: right;
  }

  .par {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 18px;
  }
`;

const inline = css`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  vertical-align: middle;
`;

export default ({album, artist, rating, reviewer, review_body}) => {
  let review_parts = review_body.split('<br/>');
  return (
    <div css={css_card} className="card">
      <div css={inline} className="ratings">
        <h2>{album}</h2>
        <div className="div_score">
          <img className="star" src={star} alt="star" />
          <p className="rating_score">{rating}</p>
        </div>
      </div>
      <h3>{artist}</h3>
      {review_parts.map((par) => {
        return <p className="par">{par}</p>;
      })}
      <p className="right">- {reviewer}</p>
    </div>
  );
};
