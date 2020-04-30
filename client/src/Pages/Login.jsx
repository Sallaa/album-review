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
    max-width: 400px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password']:focus {
    border-color: rgb(36, 66, 184);
  }

  a {
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
    margin: 10px;
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const signInWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const user = await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setSuccess('Logged In!');
          setEmail('');
          setPassword('');
        });
      console.log('done');
    } catch (error) {
      setError(error.message);
      setPassword('');
    }
  };

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div css={input}>
      {/* TODO: login heading redundant */}
      <div css={input}>
        <h1>User Log In</h1>
        {error !== null && <p className="error">{error}</p>}
        {success !== null && <p className="success">{success}</p>}
        <form css={input}>
          <div css={inline}>
            <h2>Email:</h2>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={(event) => onChangeHandler(event)}
            />
            <span></span>
          </div>
          <div css={inline}>
            <h2>Password:</h2>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              onChange={(event) => onChangeHandler(event)}
            />
            <span></span>
          </div>
          <Link css={inline} to="/signup">
            Don't have an Account? You can create one.
            <div className="emoji" role="img" aria-label="victory-hand">
              ✌️
            </div>
          </Link>
          <Button
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
            text={'SIGN IN'}
          />
        </form>
      </div>
    </div>
  );
};
