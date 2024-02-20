import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { EmblaCarousel } from "../components/EmblaCarousel";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const Login = () => {
	return (
		<div
			name="login"
			className="logincover flex h-screen justify-center items-center m-auto backdrop-blur-sm ">
			{/* <div className='absolute inset-0 bg-gray-900 bg-opacity-50'></div> */}
			<form className="formValues text-sm w-[30%] my-10 p-4 flex flex-col gap-4 h-[65%] justify-center items-center shadow-2xl rounded-md backdrop-blur-xl ">
				
				<h1 className=" font-bold text-2xl text-gray-100">Login</h1>
				
				<select className="flex gap-2 text-gray-100 bg-slate-600 border-none p-2 ">
					<option value="Rank">Rank</option>
					<option value="Rank">Warrant Officer</option>
					<option value="Rank">Flight sergent</option>
					<option value="Rank">Sergent</option>
					<option value="Rank">Corporal</option>
					<option value="Rank">Lance Corporal</option>
					<option value="Rank">Aircraftman</option>
					
				</select>
				<div className=" text-gray-900 absolute top-[160px] right-5">
				<FaAngleDown className="text-gray-50" />
				</div>
			
				<p className="flex gap-2 text-gray-100 "> {/* <CiMail /> Name */}</p>

				<input
					type="text"
					className="w-10 h-5 text-gray-100 bg-slate-600 border-none p-1 "
					placeholder="Name  "
				/>
				<input type="password" placeholder="Password " className="bg-slate-600 border-none" />
				<button className="px-6 py-3 w-40 border-1 border-blue-200 text-gray-100 hover:text-gray-600 hover:bg-gray-50">
					Submit
				</button>
			</form>
			<div className="text-sm w-[30%] h-full flex justify-center items-center">
				<EmblaCarousel />
			</div>
		</div>
	);
};

export default Login;
