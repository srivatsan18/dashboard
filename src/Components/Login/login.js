import React from "react";

class login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Log In</h2>
        </div>
        <form>
          <div className="Username">
            <label>Username:</label>
            <input
              className="inusername"
              type="text"
              placeholder="Enter Username"
            ></input>
            <br />
            <br />
          </div>
          <div className="Password">
            <label>Password:</label>
            <input
              className="inpassword"
              type="password"
              placeholder="Enter Password"
            ></input>
            <br />
            <br />
          </div>
          <div className="Submit">
            <input type="submit"></input>
          </div>
        </form>
      </div>
    );
  }
}
export default login;
