import "./Login.scss";

const Login = () => {

    return (
        <section className="login">
            <div className="login__header">
                <p>Logo here</p>
                <p>Synergy</p>
            </div>
            <div className="login__welcome">
                <div className="login__welcome__wrapper">
                    <h3>Welcome back!</h3>
                    <p>wavy hand here</p>
                </div>
                <p>Lorem ipsium dolor sit bla bla bla</p>
            </div>
            <div className="login__email">
                <p>Email</p>
                <p className="login__email__missing">Missing email component </p>
            </div>
            <div className="login__password">
                <p>Password</p>
                <p className="login__password__missing">Missing password component </p>
            </div>
            <div className="login__reg">
                <div className="login__reg__signup">
                    <p>{"Don't have an account?"} <a className="login__reg__signup--btn" /* Need on click event */>Sign Up</a></p>
                </div>
                <div className="login__reg__reset">
                    <a className="login__reg__reset--btn" /* Need on click event */>Forgotten password? </a>
                </div>
            </div>
            {/* <Button /> Put actual button here */}
        </section>

    );


}

export default Login;