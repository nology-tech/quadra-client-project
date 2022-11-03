import "./SignUp.scss";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/logo.png";
import InputBox from "../../components/InputBox/InputBox";

import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import app from "../../firebase";
import { useState } from "react";

const SignUp = ({ login }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth(app);

  const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password1Success, setPassword1Success] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [password2Success, setPassword2Success] = useState("");
//"Successful email entered"
//"Error - your email must contain an '@' symbol"
//"Successful email entered"

//"Error- Passwords must contain at least 8 characters & one uppercase letter"
//"Error - Passwords do not match!"
// "Passwords match"
  const register = () => {
    if (confirmPassword != registerPassword) {
      alert("password does not match");
      setPassword1Error("passwords do not match");
    } else if (!passRegex.test(registerPassword)) {
      alert("password needs to contain");
    } else {
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
  }};

  return (
    <div className="background">
      <div className="signUp">
        <div className="signUp__company">
          <img
            className="signUp__company signUp__company--logo"
            src={logo}
          ></img>
          <p className="signUp__company signUp__company--name">Synergy</p>
        </div>

        <h1 className="signUp__header">Create an account</h1>
        <p className="signUp__headerText">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>

        <div className="signUp__input">
          <InputBox
            className="signUp__input signUp__input--email"
            title="Email"
            inputType="text"
            errorMessage={emailError}
            successMessage={emailSuccess}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />

          <InputBox
            className="signUp__input signUp__input--password"
            title="Password"
            inputType="text"
            errorMessage={password1Error}
            // errorMessage="Error- Passwords must contain at least 8 characters & one uppercase letter"
            successMessage={password1Success}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />

          <InputBox
            className="signUp__input signUp__input--confirmPassword"
            title="Confirm Password"
            inputType="text"
            errorMessage={password2Error}
            successMessage={password2Success}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="signUp__text">
          <p className="signUp__text signUp__text--account">
            Already have an account?
          </p>
          <a href={login} className="signUp__text signUp__text--login">
            Login
          </a>
        </div>

        <div className="signUp__continue">
          <Button buttonText="Continue >" handleClick={register} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
