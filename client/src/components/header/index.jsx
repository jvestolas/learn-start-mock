import React from 'react';
import PropTypes from 'prop-types'; // can implement later
import { Link } from "react-router-dom"
import styles from './styles';

const Header = ({ logout, toggleSignup, signedIn, name}) => {
  const renderSignUpOrLogout = () => {
    if (signedIn && name.length) {
      return(<p onClick={logout}>Log Out</p>)
    } else {
      return (<p onClick={toggleSignup}>Sign Up</p>)
    }
  }

  const renderUsername = () => (signedIn ? <p className="header_username">{name}</p> : null)

  return (
    <div className="header_wrapper">
      <Link to="/">
        <h4 className="header_left_content">LearnStart</h4>
      </Link>
      <div className="header_right_content">
        {renderUsername()}
        {renderSignUpOrLogout()}
      </div>
    </div>
  )
}

export default Header;
