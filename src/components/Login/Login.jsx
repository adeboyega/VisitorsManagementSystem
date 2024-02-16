import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { EmblaCarousel } from "../EmblaCarousel";
import { IoPersonAddOutline } from "react-icons/io5";

const Login = () => {
	return (
		<div name='login' className="logincover flex h-screen justify-center items-center m-auto ">
			<form className="text-sm w-[30%] my-10 p-4 flex flex-col gap-4 h-full justify-center items-center">
			<h1 className=" font-bold text-2xl text-gray-100">Login</h1>
			<p className="flex gap-2 text-gray-100 ">
				{" "}
				<IoPersonAddOutline /> Rank
			</p>
			
			<input type="text" className="w-10 h-10 text-gray-100" />
			<p className="flex gap-2 text-gray-100 ">
				{" "}
				<CiMail /> Name
			</p>
			
			<input type="text" className="w-10 h-10 text-gray-100" />
			<p className="flex gap-2 text-sm text-gray-100">
				<CiLock /> Password
			</p>
			<input type="password" />
			<button className="px-6 py-3 w-40 border-1 border-blue-200 text-gray-100 hover:text-gray-600 hover:bg-gray-50">Submit</button>
		</form>
		<div className="text-sm w-[30%] h-full flex justify-center items-center">
			<EmblaCarousel />
		</div>
		</div>
		
	);
};

export default Login;
