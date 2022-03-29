import React from "react";
import AuthService from "../services/auth.service";
import Header from "./Header";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div>
      <Header />
      <div className="mydetails">
        <h3 className="p-3 text-center">Your Details :</h3>
        <table className="table table-striped table-bordered" border="6">
          <tr>
            <th>UserName -:</th>
            <th>E-Mail -:</th>
            <th>Role -:</th>
          </tr>
          <tr>
            <th>{currentUser.username}</th>
            <th>{currentUser.email}</th>
            <th>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </th>
          </tr>
        </table>
        {/* <li>
          <header>
            Username : <strong>{currentUser.username}</strong>
          </header>
        </li> */}
        {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p> */}
        {/* <li>
          <strong>Email :</strong> {currentUser.email}
        </li> */}
        {/* "Authorities" was changed */}
        {/* <strong>Your Registered Role : </strong>
        <li>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
          </ul>
        </li> */}
      </div>
    </div>
  );
};
export default Profile;
