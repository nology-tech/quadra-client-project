// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUp/SignUp";
// import Wallet from "./pages/Wallet/Wallet";

import Transfer from "./pages/Transfer/Transfer";

const App = () => {
  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp/>} />
    //   <Route path="/wallet" element={<Wallet/>} />
    // </Routes>
    <Transfer isActive={true} />
  );
};

export default App;
