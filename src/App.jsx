import { useEffect, useState } from "react";
import { HomeScreen, LoginScreen, ProfileScreen } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./utils/firebase";
import { authStore } from "./store";

function App() {
  const [{ user }, setUser] = useState({ user: null });

  useEffect(() => {
    const authSub = authStore.subscribe(setUser);
    const unsubscribe = auth.onAuthStateChanged(auth.fireAuth, (userAuth) => {
      if (userAuth) {
        authStore.login({
          uid: userAuth.uid,
          email: userAuth.email,
        });
      } else {
        authStore.logout();
      }
    });

    return () => {
      unsubscribe();
      authSub.unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
