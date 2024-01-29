import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Login = () => {
	return (
		<form className="text-sm w-[40%] mx-auto my-10 p-4 flex flex-col gap-4">
			<h1 className=" font-bold text-2xl">Login</h1>
			<p className="flex gap-2 text-gray-400">
				{" "}
				<CiMail /> Email address
			</p>
			<input type="text" className="w-10 h-10" />
			<p className="flex gap-2 text-gray-400 text-sm">
				<CiLock /> Password
			</p>
			<input type="password" />
		</form>
	);
};

export default Login;
