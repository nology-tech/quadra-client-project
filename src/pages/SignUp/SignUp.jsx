import "./SignUp.scss";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import InputBox from "../../components/InputBox/InputBox";

const SignUp = ({ login }) => {
  const isTextDark = true;
  return (
    <div className="background">
      <div className="signUp">
        <div className="signUp__company">
        <Logo isTextDark={isTextDark}/>
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
            errorMessage="Error - your email must contain an '@' symbol"
            successMessage="Successful email entered"
          />

          <InputBox
            className="signUp__input signUp__input--password"
            title="Password"
            inputType="password"
            errorMessage="Error- Passwords must contain at least 8 characters & one uppercase letter"
            successMessage="Password meets requirements"
          />

          <InputBox
            className="signUp__input signUp__input--confirmPassword"
            title="Confirm Password"
            inputType="password"
            errorMessage="Error - Passwords do not match!"
            successMessage="Passwords match"
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
          <Button buttonText="Continue >" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
