import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./userContext";
//import SearchBar from "./searchBar";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  async function logout() {
    const response = await fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    if (response.ok) {
      setUserInfo(null);
      window.location.href = '/login';
    } else {
      alert('Logout failed');
    }
  }

  const username = userInfo?.username;

    return (
    <header>
        <Link to="/" className="logo">THE COOK BOOK</Link>
        <nav>
          {username && (
            <>
            <span>Hello, {username}</span>
            <Link to="/create">Create post</Link>
            <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )}
        </nav>
    </header>
    );
}