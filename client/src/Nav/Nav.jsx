/** @jsx jsx */
import { useContext } from "react";
import {jsx, css} from "@emotion/core";
import {Link, useHistory} from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";

const css_nav = css `
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

const css_ul = css `
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  list-style-type: none;
  padding: 1rem;
  margin-top: 0;
`;

const css_login = css `
    margin-left: auto;
`;

export default() => {
  const [user] = useContext(UserContext);
  const history = useHistory();

  function logOut(){
    auth.signOut().then(function() {
      history.push("/login");
    }).catch(function(error) {
    // An error happened.
  });
  } 

    return (
      <nav css={css_nav}>
        <ul css={css_ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user !== null && (
            <li>
              <Link to="/new">Create New</Link>
            </li>
          )}
          {user !== null && (
            <li css={css_login}>
              <Link to="/signout" onClick={logOut}>Sign Out</Link>
            </li>
          )}
          {user == null && (
            <li css={css_login}>
              <Link to="/login">Log In</Link>
            </li>
          )}
        </ul>
      </nav>
    );

}