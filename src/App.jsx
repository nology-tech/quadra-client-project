// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import LiveRates from "./pages/LiveRates/LiveRates";
import "./styles/main.scss";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUp/SignUp";
// import Wallet from "./pages/Wallet/Wallet";

const App = () => {
  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/wallet" element={<Wallet />} />
    // </Routes>
    <LiveRates />
  );
};

export default App;
