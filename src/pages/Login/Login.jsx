import "./Login.scss";

const Login = () => {
  return (
    <section className="login">
      <div className="login__header">
        <p>Logo here</p>
        <p>Synergy</p>
      </div>
      <div className="login__welcome">
        <div className="wrapper">
          <h3>Welcome back!</h3>
          <p>wavy hand here</p>
        </div>
        <p>Lorem ipsium dolor sit bla bla bla</p>
      </div>
      <div className="login__email">
        <p>Email</p>
        <p className="missingComponent">Missing email component </p>
      </div>
      <div className="login__password">
        <p>Password</p>
        <p className="missingComponent">Missing password component </p>
      </div>
      <div className="login__help">
        <div className="signUp">
          <p>
            Don&apos;t have an account?{" "}
            <span className="signuUp__signUp" /* Need on click event */>
              Sign Up
            </span>
          </p>
        </div>
        <div className="forgotPassword">
          <p
            className="forgotPassword__forgotPassword" /* Need on click event */
          >
            Forgotten password?{" "}
          </p>
        </div>
      </div>
      <div className="login__button">
        <p>Login button component here</p>
      </div>
    </section>
  );
};

export default Login;
