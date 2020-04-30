/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from "react-router-dom";
import Button from "../components/button";
import { auth } from "../firebase";
import { useState } from "react";

const input = css `
  input[type="text"],
  input[type="email"],
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
  input[type="email"],
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

export default() => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const signInWithEmailAndPasswordHandler = async (event, email, password) => {
      event.preventDefault();
      setError(null);
      setSuccess(null);
      try {
        const user = await auth
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            setSuccess("Logged In!");
            setEmail("");
            setPassword("");
          });
        console.log("done");
      } catch (error) {
        setError(error.message);
        setPassword("");
      }
    };


    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    return (
      <div css={input}>
        {/* TODO: login heading redundant */}
        <div css={input}>
          <h1>Log In</h1>
          {error !== null && <p className="error">{error}</p>}
          {success !== null && <p className="success">{success}</p>}
          <form css={input}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="your email"
              id="email"
              onChange={(event) => onChangeHandler(event)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="your password"
              id="password"
              onChange={(event) => onChangeHandler(event)}
            />
            <Button
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
              }}
              text={"Log In"}
            />
          </form>
          <Link to="/signup">
            Don't have an Account? You can create one.
            <span className="emoji" role="img" aria-label="victory-hand">
              ✌️
            </span>
          </Link>
        </div>
      </div>
    );
};
