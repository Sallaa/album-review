/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import {jsx, css} from '@emotion/core';
import {Link} from 'react-router-dom';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

const firebaseConfig = {
  apiKey: 'AIzaSyCMwluOFuw2JYdxiuQ9fFtpGqmfvSF6QiI',
  authDomain: 'album-review-info1998.firebaseapp.com',
  databaseURL: 'https://album-review-info1998.firebaseio.com',
  projectId: 'album-review-info1998',
  storageBucket: 'album-review-info1998.appspot.com',
  messagingSenderId: '560589081542',
  appId: '1:560589081542:web:56ed14dd03244dc3ba40c7',
  measurementId: 'G-GDX111J3XS'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const css_nav = css`
  background-color: black;
  font-size: 16px;

  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  li {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const css_ul = css`{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  list-style-type: none;
  padding: 1rem;
  margin-top: 0;

`;

const css_login = css`
  margin-left: auto;
`;

const provider = new firebase.auth.GoogleAuthProvider();

export default ({user, callback}) => {
  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged((user) => {
      callback(user);
    });
  }

  useEffect(() => onAuthStateChange(), []);

  function login() {
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <nav css={css_nav}>
      <ul css={css_ul}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user && (
          <li>
            <Link to="/new">Create New</Link>
          </li>
        )}
        <li css={css_login}>
          {user && (
            <Link
              to={window.location.pathname}
              onClick={() => firebase.auth().signOut()}>
              Sign out
            </Link>
          )}
          {!user && (
            <Link to={window.location.pathname} onClick={login}>
              Log in
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
