/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import Reviews from '../components/Reviews';

const styles = css`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

export default () => {
  return (
    <div css={styles}>
      <h1>Reviews</h1>
      <Reviews />
    </div>
  );
};
