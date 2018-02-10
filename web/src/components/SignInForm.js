import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function SignInForm({ onSignIn }) {
	return (
		<div className="row mt-5">
			<div className="login-screen bg-white box-shadow">
				<img src={logo} className="logo" alt="logo" /> <small>Management System</small>
				<h2 className="text-center mt-4 text-shadow">Sign In</h2>
				<form
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
					<div className="form-group ">
						<label className="control-label ">Email</label>
						<div className="input-group">
							<input type="email" name="email" required />
						</div>
					</div>

					<div className="form-group ">
						<label className="control-label">Password</label>
						<div className="input-group">
							<input type="password" name="password" required />
						</div>
					</div>

					<div className="form-group  ">
						<button className="btn btn-primary">Sign In</button>
					</div>
					<div className="form-group  ">
						<Link to="/signup" className="">
							<i className="fa fa-user-plus" />
							<span> Sign Up</span>
						</Link>
                  </div>
				</form>
			</div>
		</div>
	);
}

export default SignInForm;
