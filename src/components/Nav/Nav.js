import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import logo from "../../images/gifts-for-seniors-logo.png";
const Nav = (props) => (
  <div className="nav">
    {/* <Link to="/home">
      <h2 className="nav-title">Gifts for Seniors</h2>
    </Link> */}
    <a className="srcLink" href="https://www.giftsforseniors.org/">
      <img className="srcLogo" src={logo} />
    </a>
    {/* <h2 className="nav-title">Gifts for Seniors</h2> */}
    <div className="nav-left">
      <a href="https://www.giftsforseniors.org/" className="nav-link">
        Home
      </a>

      <Link className="nav-link" to="/wishlist">
        Wishlist
      </Link>
      <Link className="nav-link" to="/barrels">
        Donation Locations
      </Link>
      {/* <Link className="nav-link" to="/home"> */}
      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {/* {props.user.id ? "Home" : "Login / Register"}
      </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/wishlist-admin">
            Wishlist Admin
          </Link>
          <Link className="nav-link" to="/barrel-admin">
            Barrel Admin
          </Link>
          <LogOutButton className="nav-link">Logout</LogOutButton>
          {/* <Link className="nav-link" to="/info">
            Info Page
          </Link> */}
          {/* <LogOutButton className="nav-link" /> */}
        </>
      )}
      {/* Always show this link since these pages are not protected */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
