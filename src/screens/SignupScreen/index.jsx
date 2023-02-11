import React, { useRef } from "react";
import { auth } from "../../utils/firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  console.log(auth);

  function register(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        auth.fireAuth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => console.log(user))
      .catch((error) => alert(error));
  }

  function signIn(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        auth.fireAuth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => console.log(user))
      .catch((error) => alert(error));
  }
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" name="email" placeholder="Email" ref={emailRef} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
