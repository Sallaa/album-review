/** @jsx jsx */
import React from 'react';
import {jsx, css} from '@emotion/core';
import star from '../icons/star.svg';

const css_card = css`
  padding: 1rem;
  margin: 1rem;
  max-width: 600px;
  box-shadow: 0 0 0 0.01px white;
  transition: 0.3s;
  border-radius: 10px;
  margin-bottom: 2rem;

  :hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  h2 {
    font-weight: bold;
    color: #4864d9;
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
`;

export default () => {
  return (
    <div css={css_card} class="card">
      <div class="ratings">
        <h2>Album, Artist</h2>
        <div class="div_score">
          <img class="star" src={star} alt="star" />
          <p class="rating_score">4.9</p>
        </div>
      </div>

      {/* TODO: genre tags? */}
      <h4>By: Reviewer</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        dicta corporis animi laudantium deleniti, assumenda dolorem architecto
        accusamus molestias aspernatur. Laudantium inventore illum corporis
        dolor quae corrupti, delectus nihil tenetur?Rerum perferendis illum
        blanditiis? Odit quae deserunt aliquid suscipit ipsam voluptatum,
        perspiciatis, facere architecto doloremque, placeat officiis voluptates
        quo saepe fuga accusamus a facilis debitis consequatur eaque natus
        laboriosam amet!
      </p>
    </div>
  );
};
