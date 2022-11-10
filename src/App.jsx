import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Wallet from "./pages/Wallet/Wallet";
import Nav from "./pages/Nav/Nav";
import Convert from "./pages/Convert/Convert";
import LiveRates from "./pages/LiveRates/LiveRates";
const App = () => {
  const [user, setUser] = useState();

  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login saveUser={setUser} />} />
      <Route path="/signup" element={<SignUp saveUser={setUser} />} />
      {user && (
        <Route
          path="/wallet"
          element={
            <>
              <Nav clearUser={setUser} />
              <Wallet user={user} amount={1000} />
            </>
          }
        />
      )}
      {user && (
        <Route
          path="/convert"
          element={
            <>
              <Nav clearUser={setUser} />
              <Convert />
            </>
          }
        />
      )}
      {user && (
        <Route
          path="/liveRates"
          element={
            <>
              <Nav clearUser={setUser} />
              <LiveRates />
            </>
          }
        />
      )}
    </Routes>
  );
};

export default App;
