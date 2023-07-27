// eslint-disable-next-line no-unused-vars
import React from "react";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from "../helper/validate";


import styles from '../styles/User.module.css';

function Recovery() {

	const formik = useFormik({
		initialValues: {
			password: ''
		},
		validate: passwordValidate,
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
						<h4 className="text-5xl font-bold text-center mb-6">Recovery</h4>
						<p className="py-4 text-xl text-center text-gray-500">
							Enter CODE to recover password
						</p>
					</div>

					<form onSubmit={formik.handleSubmit} className="pt-20">

						<div className="textbox flex flex-col items-center gap-6">

							<div className="input text-center">
								<p className="py-5 text-sm text-left text-gray-500">
									Enter 6 digit CODE sent to your email address
								</p>
								<input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder="CODE" />
							</div>

							{/* eslint-disable-next-line react/no-unescaped-entities */}
							<button className={styles.btn} type="submit">Recover</button>
						</div>

						<div className="text-center py-4">
							<span className="text-gray-500">Can't get CODE? <button className="text-red-500"> Resend </button></span>
						</div>

					</form>

				</div>

			</div>
		</div>
  )
}

export default Recovery;