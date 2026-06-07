import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdDangerous } from "react-icons/md";
import { useState } from "react";
import NoteContext from "../context/NoteContext";

const LoginForm = ({ show, setShow }) => {
  const context=useContext(NoteContext);
  const {registerUser}=context;
  const [work, setWork] = useState("Sign-up");
  const [isPass,setPass]=useState("password");
  const [status,setStatus]=useState("Show");
  const initialDetail={
    username:"",
    email:"",
    password:"",
  }
  const [details,setDetails]=useState(initialDetail);
  const handleChange=(e)=>{
    setDetails({
      ...details,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    registerUser(details);
  }
  const handlePasswordVisibility=()=>{
    if(isPass==="password") {
      setStatus("Hide");
      setPass("text");
    }else {
      setStatus("Show");
      setPass("password");
    };
  }
  const navigate = useNavigate();
  return (
    <form className="bg-black w-full min-w-[310px] py-8 px-8 rounded" onSubmit={handleSubmit}>
      <span
        className="text-white text-2xl hover:text-red-800 cursor-pointer fixed right-4 top-5"
        onClick={() => {
          (navigate("/"), setShow(!show));
        }}
      >
        <MdDangerous />
      </span>
      {work === "Sign-up" && (
        <input
          className="mt-8 py-2 px-2 shadow-[0_2px_3px_2px_rgba(255,0,0,1)] outline-none w-full text-gray-200"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={details.username}
        />
      )}
      <input
        className="mt-4 py-2 px-2 shadow-[0_2px_3px_2px_rgba(255,0,0,1)] outline-none w-full text-gray-200"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={details.email}
      />
      <div className="flex items-center">
      <input
        className="mt-4 py-2 px-2 shadow-[0_2px_3px_2px_rgba(255,0,0,1)] outline-none w-full text-gray-200"
        type={`${isPass}`}
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={details.password}
      />
      <span className="text-white px-2 mt-4 cursor-pointer" onClick={()=>handlePasswordVisibility()}>{status}</span></div>
      <button className="mt-4 mb-4 bg-green-800 hover:bg-green-700 cursor-pointer w-full p-2 text-2xl">
        {work === "Sign-up" ? "Log-in" : "Sign-up"}
      </button>
      {work === "Sign-up" ? (
        <span className="text-white text-2xl inline">Create an account : </span>
      ) : (
        <span className="text-white text-2xl inline">
          Already have an account?{" "}
        </span>
      )}
      <span
        className="text-blue-500 underline cursor-pointer text-2xl"
        onClick={() => setWork(work === "Sign-up" ? "Log-in" : "Sign-up")}
      >
        {work}
      </span>
    </form>
  );
};

export default LoginForm;
