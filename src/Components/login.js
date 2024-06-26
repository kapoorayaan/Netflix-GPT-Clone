import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg "
          alt="logo"
        ></img>
      </div>
      <form className="w-3/12 p-12 bg-black absolute my-36  mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="text-3xl font-bold ">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 shadow-lg bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 m-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already a user? Login now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
