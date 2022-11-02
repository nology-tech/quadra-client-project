import Layout from "../../components/Layout/Layout";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { useState } from "react";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const toFirebase = () => {
    createUserWithEmailAndPassword(auth, email, password)
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

  return (
    <Layout>
      <label>
        Email Address
        <input
          type={"email"}
          placeholder="please enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        password
        <input
          type={"password"}
          placeholder="please enter your password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>

      <button onClick={toFirebase}>Sign up</button>

      <h1>You have signed up!</h1>
    </Layout>
  );
};

export default Home;
