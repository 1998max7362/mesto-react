import { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  matchRoutes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import { AuthorizedMain } from "./components/AuthorizedMain";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { Login } from "./components/Login";
import { auth } from "./utils/Auth";
// import { Sign } from "./components/Sign";

function App() {
  const [currentUserInfo, setCurrentUserInfo] = useState({});

  const handleCurrentUserInfoChange = useCallback((newUserInfo) => {
    setCurrentUserInfo((oldUserInfo) => {
      return { ...oldUserInfo, ...newUserInfo };
    });
  },[setCurrentUserInfo]);

  if (localStorage.getItem('token')){
    const token = localStorage.getItem('token')
    auth.checkTokenValidity(token)
  }
  

  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUserInfo}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <AuthorizedMain
                    setCurrentUserInfo={handleCurrentUserInfoChange}
                  />
                }
              />
              <Route path="/sign-up" element={<Register />} />
              <Route
                path="/sign-in"
                element={
                  <Login
                  setCurrentUserInfo={handleCurrentUserInfoChange}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </CurrentUserContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
