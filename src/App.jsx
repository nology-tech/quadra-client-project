import { Route, Routes } from "react-router-dom";
import {useState} from 'react';
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Wallet from "./pages/Wallet/Wallet";

const App = () => {

  const [user, setUser] = useState();
  
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login saveUser={setUser}/>} />
      <Route path="/signup" element={<SignUp/>} />
        {user && <Route path="/wallet" element={<Wallet/>} />}
    </Routes>
  );
};

export default App;
