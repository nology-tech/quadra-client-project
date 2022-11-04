// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUp/SignUp"
import LiveRates from "./pages/LiveRates/LiveRates";
const App = () => {
  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp/>} />
    // </Routes>
    <LiveRates />
  );
};

export default App;
