import { useState } from "react";
import SignupScreen from "../SignupScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4My0B4Y37nS5v9H8j89NgrrRkzZUX43Glw09xT3imbA&usqp=CAU&ec=48665699"
          alt="logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Thanks for checking out my movie gallary!</h1>
            <h2>
              This App is <strong>NOT A ASSOCIATED WITH NETFLIX</strong>
            </h2>
            <h3>
              Ready to check it out? Click "Get started", enter an email &
              password, and click the sign up button.
              <strong>
                Please do not use a password that is used for another platform
              </strong>
            </h3>

            <div className="loginScreen__input">
              <form action="">
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
