import { Route, Routes } from "react-router-dom";
import {useState} from 'react';
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Wallet from "./pages/Wallet/Wallet";
import Transfer from "./pages/Transfer/Transfer";
import Convert from "./pages/Convert/Convert";
import Nav from "./pages/Nav/Nav";

const App = () => {

  const [user, setUser] = useState();
  const [transferDetails, setTransferDetails] = useState();
  
  return (
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/login" element={<Login saveUser={setUser}/>} />
      <Route path="/signup" element={<SignUp saveUser={setUser}/>} />
        {user && <Route path="/wallet" element={<Wallet user={user}/>} />}
        <Route path="/converter" element={<Convert saveTransferDetails={setTransferDetails}/>}/>
        <Route path="/transfer" element={<Transfer transferDetails={transferDetails} />}/>
      {user && (
        <Route 
          path="/wallet" 
          element={ 
            <> 
              <Nav clearUser={setUser}/> 
              <Wallet user={user} amount={1000}/> 
            </>
          } 
        /> 
      )}
    </Routes>
  );
};

export default App;
