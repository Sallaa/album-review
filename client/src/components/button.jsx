/** @jsx jsx */
import {jsx} from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button `
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

  :active {
    background: rgb(36, 66, 184);
  }
`;

export default({css, text}) => {
    return <Button css={css}>{text}</Button>;
};