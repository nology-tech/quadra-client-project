import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Wallet from "./pages/Wallet/Wallet";
import AccountPage from "./pages/AccountPage/AccountPage";
import Transfer from "./pages/Transfer/Transfer";
import ContactList from "./pages/ContactList/ContactList";

const App = () => {
  const [user, setUser] = useState();

  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    //   <Route path="/login" element={<Login saveUser={setUser} />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   {user && <Route path="/wallet" element={<Wallet />} />}
    //   {/* {user && <Route path="/contacts" element={<ContactList />} />} */}
    // </Routes>

    // <Routes>
    //   <Route path="*" element={<AccountPage/>}/>
    //   <Route path="/Transfer" element={<Transfer/>}/>



    // </Routes>



    <AccountPage/>
    // <ContactList/>
    
  );
}

export default App;
