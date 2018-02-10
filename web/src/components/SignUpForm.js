import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function SignUpForm({ onSignUp }) {
  return (
    <div className="container-fluid ">
      <div className="row  mt-5">
        <div className="login-screen bg-white box-shadow">
          <img src={logo} className="logo" alt="logo" />{" "}
          <small>TANTO Management System</small>
          <h2 className="text-center mt-4 text-shadow">Sign Up</h2>
          <form
            onSubmit={event => {
              // Prevent old-school form submission
              event.preventDefault();

              const form = event.target;
              const elements = form.elements; // Allows looking up fields using their 'name' attributes
              // Get entered values from fields
              const email = elements.email.value;
              const password = elements.password.value;
              const userName = elements.userName.value;

              // Pass this information along to the parent component
              onSignUp({ email, password, userName });
            }}
          >
            <fieldset>
              <div className="form-group">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <label className="mb-2">
                    {"Email: "}
                    <input type="email" name="email" />
                  </label>
                  <label className="mb-2">
                    {"Password: "}
                    <input type="password" name="password" />
                  </label>
                  <label className="mb-2">
                    {"User name: "}
                    <input type="text" name="userName" />
                  </label>

                  <button className="btn btn-info">Sign Up</button>
                </div>
              </div>
            </fieldset>

            <div>
              <Link to="/signin">
                <i className="fa fa-arrow-left mt-3 ml-3" /> Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
