import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Wallet from "./pages/Wallet/Wallet";
import Transfer from "./pages/Transfer/Transfer";
import Convert from "./pages/Convert/Convert";
import Nav from "./pages/Nav/Nav";
import LiveRates from "./pages/LiveRates/LiveRates";
import ContactList from "./pages/ContactList/ContactList";
import TransferSend from "./pages/TransferSend/TransferSend";
import TransferConfirm from "./pages/TransferConfirm/TransferConfirm";
import AccountPage from "./pages/AccountPage/AccountPage";

const App = () => {
  const [user, setUser] = useState();
  const [transferDetails, setTransferDetails] = useState();

  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login saveUser={setUser} />} />
      <Route path="/signup" element={<SignUp saveUser={setUser} />} />
      {user && (
        <>
          <Route
            path="/wallet"
            element={
              <>
                <Nav clearUser={setUser} />
                <Wallet user={user} amount={1000} />
              </>
            }
          />{" "}
          <Route
            path="/convert"
            element={
              <>
                <Nav clearUser={setUser} />
                <Convert saveTransferDetails={setTransferDetails} />
              </>
            }
          />
          <Route
            path="/liverates"
            element={
              <>
                <Nav clearUser={setUser} />
                <LiveRates />
              </>
            }
          />
          <Route
            path="/transfer"
            element={
              <>
                <Nav clearUser={setUser} />
                <Transfer transferDetails={transferDetails} />
              </>
            }
          />
          <Route
            path="/transfer/recipient"
            element={
              <>
                <Nav clearUser={setUser} />
                <TransferSend transferDetails={transferDetails} />
              </>
            }
          />
          <Route
            path="/transfer/confirm"
            element={
              <>
                <Nav clearUser={setUser} />
                <TransferConfirm transferDetails={transferDetails} />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Nav clearUser={setUser} />
                <ContactList />
              </>
            }
          />
          <Route
            path="/contacts/details"
            element={
              <>
                <Nav clearUser={setUser} />
                <AccountPage />
              </>
            }
          />
        </>
      )}
    </Routes>
  );
};

export default App;
