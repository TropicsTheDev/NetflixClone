import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function transitionNavBar() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  });

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"
          alt="pfp"
        />
      </div>
    </div>
  );
}
