/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import {Link} from "react-router-dom";
import Button from "../components/button";
const input = css `
  input[type="text"],
  input[type="password"] {
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

  input[type="text"],
  input[type="password"]:focus {
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

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

   div > h1 {
    align-self: center;
  }

  div > input {
    align-self: center;
  }

  div > button {
    align-self: center;
  }

  div > a {
    align-self: center;
  }

`;

export default() => {
    return (
        <div css={input}>
            <div css={input}>
                <h1>Create your account</h1>
                <input type="text" placeholder="new username"/>
                <input type="password" placeholder="new password"/>
                <Button text={"Create my account"}/>
                <Link to="/login">
                    Already have an Account? Log In.
                    <span className="emoji" role="img" aria-label="victory-hand">
                        ✌️
                    </span>
                </Link>
            </div>
        </div>
    );
};
