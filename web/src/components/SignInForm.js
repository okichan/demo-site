import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function SignInForm({ onSignIn }) {
   return (
      <div className="row mt-5">
         <div className="login-screen bg-white box-shadow">
            <img src={logo} className="logo" alt="logo" /> <small>Management System</small>
            <h2 className="text-center m-4 text-shadow">Sign In</h2>
            <form
               className="col-md-6 offset-md-3"
               onSubmit={event => {
                  // Prevent old-school form submission
                  event.preventDefault();

                  const form = event.target;
                  const elements = form.elements; // Allows looking up fields using their 'name' attributes
                  // Get entered values from fields
                  const email = elements.email.value;
                  const password = elements.password.value;

                  // Pass this information along to the parent component
                  onSignIn({ email, password });
               }}
            >
               <div className="col-auto">
                  <div className="input-group my-3">
                     <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-envelope" /></div>
                     </div>
                     <input type="email" name="email" className="form-control" defaultValue="test@test.com" required />
                  </div>
               </div>
               <div className="col-auto">
                  <div className="input-group my-3">
                     <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-unlock-alt" />&nbsp;</div>
                     </div>
                     <input type="password" name="password" className="form-control" defaultValue="12345" required />
                  </div>
               </div>

               <div className="col-auto my-3">
                  <button type="submit" className="btn btn-primary mb-2">Sign In</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default SignInForm;
