import React, { useState, useEffect } from "react";
import { authStore } from "../../store";
import { Nav } from "../../components";

import "./ProfileScreen.css";
import { auth } from "../../utils/firebase";

function ProfileScreen(props) {
  const [{ user }, setUser] = useState({ user: { email: "" } });

  useEffect(() => {
    const authSub = authStore.subscribe(setUser);

    return () => authSub.unsubscribe();
  }, []);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                className="profileScreen__signOut"
                onClick={() => auth.fireAuth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
