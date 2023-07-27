// eslint-disable-next-line no-unused-vars
import React from "react";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPassowrd } from "../helper/validate";

import styles from '../styles/User.module.css';

function Reset() {

	const formik = useFormik({
		initialValues: {
			password: '',
			confirm_pwd: ''
		},
		validate: resetPassowrd,
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

				<div className={styles.glass} style={{ width: "50%" }}>

					<div className="title">
						<h4 className="text-5xl font-bold text-center mb-6">Reset Password</h4>
						<p className="py-4 text-xl text-gray-500 text-center">
							Enter new password.
						</p>
					</div>

					<form onSubmit={formik.handleSubmit} className="py-20">

						<div className="textbox flex flex-col items-center gap-6">
							<input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder="New Password" />
							<input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="password" placeholder="Confirm Password" />

							{/* eslint-disable-next-line react/no-unescaped-entities */}
							<button className={styles.btn} type="submit">Sign In</button>
						</div>

					</form>

				</div>

			</div>
		</div>
  )
}

export default Reset;