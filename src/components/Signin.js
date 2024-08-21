import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";

const Signin = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    console.log(email.current.value, password.current.value);

    const message = CheckValidData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    setErrorMessage(message);
  };

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        className="bg-black w-3/12 p-12 my-44 absolute mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-6 px-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full rounded-md bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-3 w-full rounded-md bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full rounded-md bg-gray-600"
        />
        <p className="font-bold text-red-600 text-sm py-2">{errorMessage}</p>
        <button
          className="p-3 my-3 bg-red-700 w-full rounded-md"
          type="Sumbit"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-2 my-2 font-bold cursor-pointer"
          onClick={handleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a User! Sign in now "}
        </p>
      </form>
    </div>
  );
};

export default Signin;
