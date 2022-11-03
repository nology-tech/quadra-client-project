import Layout from "../../components/Layout/Layout";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../../firebase";
import { useState } from "react";

const Home = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  const auth = getAuth(app);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("user has been created");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // // ..
        alert(errorCode);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("user has logged in");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        console.log("wrong user");
      });
  };

  const logout = () => {
    signOut(auth);
  };

  onAuthStateChanged(auth, (current) => {
    setUser(current);
  });

  return (
    <Layout>
      <label>
        Email Address
        <input
          type={"email"}
          placeholder="please enter your email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
      </label>

      <label>
        password
        <input
          type={"password"}
          placeholder="please enter your password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        ></input>
      </label>

      <button onClick={signUp}>Sign up</button>

      <label>
        Email Address
        <input
          type={"email"}
          placeholder="please enter your email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </label>

      <label>
        password
        <input
          type={"password"}
          placeholder="please enter your password"
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
      </label>

      <button onClick={signIn}>Sign in</button>

      <button onClick={logout}>Sign out</button>

      <h1>User Logged:</h1>
      {user?.email}
    </Layout>
  );
};

export default Home;
