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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4My0B4Y37nS5v9H8j89NgrrRkzZUX43Glw09xT3imbA&usqp=CAU&ec=48665699"
          alt="logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png"
          alt="pfp"
        />
      </div>
    </div>
  );
}
