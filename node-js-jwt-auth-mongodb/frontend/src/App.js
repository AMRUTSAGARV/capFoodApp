// Now we add a navigation bar in App component. This is the root container for our application.
// The navbar dynamically changes by login status and current User’s roles.

// Home: always
// Login & Sign Up: if user hasn’t signed in yet
// User: AuthService.getCurrentUser() returns a value
// Board Moderator: roles includes ROLE_MODERATOR
// Board Admin: roles includes ROLE_ADMIN
// import React, { useState, useEffect } from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
//
import Login from "./components/Login";
import Register from "./components/Register";

import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import SignInOutContainer from "./containers";
// import Layout from "./components/Header/Layout";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Layout from "./components/Layout";
import AuthService from "./services/auth.service";
import AddFood from "./components/AddFood/AddFood";
import Donation from "./components/Donation/Donation";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
// import AddFood from "./components/AddFood/AddFood";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestFood from "./components/RequestFood/RequestFood";
import Orders from "./components/Orders/Orders";
// import ProfileLgOut from "./components/Logout/Logout";
import Logout from "./components/Logout/Logout";
const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();
  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }
  // }, []);
  // const logOut = () => {
  //   AuthService.logout();
  // };
  return (
    <div className="app">
      <Routes>
        {/* <SignInOutContainer /> */}
        <Route exact path="/" element={<SignInOutContainer />} />
        {/* <Route
          exact
          path="/home"
          element={[<Header />, <Slider />, <Home />, <Footer />]}
        />
        <Route path="/home/donation" element={[<Donation />]} /> */}
        <Route
          exact
          path="/home"
          element={[<Header />, <Slider />, <Home />, <Footer />]}
        />

        <Route path="/add-food" element={<AddFood />} />

        <Route path="/request-food" element={<RequestFood />} />

        <Route path="/donate" element={<Donation />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/AddFood" element={<AddFood />} /> */}
        {/* <Route path="/RequestFood" element={<RequestFood />} /> */}
      </Routes>

      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
            
          </li>
          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}
          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      </div> */}
    </div>
  );
};
export default App;

// Logout when Token is expired
