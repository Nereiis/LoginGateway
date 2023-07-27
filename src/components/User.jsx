// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from "../helper/validate";

import avatar from '../assets/profile.png';
import styles from '../styles/User.module.css';

function User() {

	const formik = useFormik({
		initialValues: {
			username: ''
		},
		validate: usernameValidate,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async values => {
			console.log(values);
		}
		}
	)

  return (
		<div className="container mx-auto m-5">

			<Toaster position="top-center" reverseOrder={false}></Toaster>

			<div className="flex justify-center items-center h-auto">

				<div className={styles.glass}>

					<div className="title">
						<h4 className="text-5xl font-bold text-center mb-6">Hello Again!</h4>
						<span className="py-4 text-xl w-2/4 text-center text-gray-500">
							Explore More by connecting with us
						</span>
					</div>

					<form onSubmit={formik.handleSubmit} className="py-1">

						<div className="profile flex justify-center py-4">
							<img className={styles.profile_img} src={avatar} alt="Avatar" />
						</div>

						<div className="textbox flex flex-col items-center gap-6">
							<input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username" />
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							<button className={styles.btn} type="submit">Let's Go</button>
						</div>

						<div className="text-center py-4">
							<span className="text-gray-500">Not a Member <Link className="text-red-500" to="/register">Register Now</Link></span>
						</div>

					</form>

				</div>

			</div>
		</div>
  )
}

export default User;