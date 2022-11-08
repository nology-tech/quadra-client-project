import "./styles/main.scss";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUp/SignUp";
// import Wallet from "./pages/Wallet/Wallet";

// import CurrencyConverter from "./components/currencyConverter/CurrencyConverter";
// import Authorization from "./pages/Authorization/Authorization";
// import  Button from "../src/components/Button/Button";
// import ConversionResult from "./components/ConversionResult/ConversionResult";
// import Funds from "./components/Funds/Funds";
// import LiveRate from "./components/LiveRate/LiveRate";
// import Landing from "../src/pages/Landing/Landing";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    
    <div>
      {/* <Button classNaming="largeButton" />
      <Button classNaming="invertedButton"/>
      <Button classNaming="corneredButton"/>
      <Button classNaming="whiteBorderButton"/>
      <Button classNaming="addCurrency" buttonText={"add currency"} /> */}
      {/* <ConversionResult /> */}
      {/* <CurrencyConverter /> */}
      {/* <Funds isManage={true}/> */}
      {/* <LiveRate isCurrentCurrency={false}/> */}
      {/* <Authorization buttonText={"login"}/> */}
      {/* <Landing /> */}
      <Login />
</div>
    // <Routes>
    //   <Route path="*" element={<Home />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/wallet" element={<Wallet />} />
    // </Routes>
  );
};

export default App;