import "./Login.scss";
import hand from "../../assets/images/hello.svg";
import InputBox from "../../components/InputBox/InputBox";
import Logo from "../../components/Logo/Logo";
import AuthNav from "../../components/AuthNav/AuthNav";

const Login = () => {
    const isTextDark=true;
    const handleSubmit = () => {

        alert("You submitted the form");

    }

    return (
        <div className="login">
            <AuthNav isLogin={false}/>
            <div className="login__content">
                <form className="signIn" onSubmit={handleSubmit}>
                    <Logo isTextDark={isTextDark}/>
                    <div className="signIn__welcome">
                        <p className="welcome__text">Welcome Back!</p>
                        <img src={hand} alt="welcome"></img>
                    </div>
                    <p className="signIn__intro">Lorem ipsium dolor sit amet, consectetur adipiscing elit.</p>
                    <InputBox 
                        title="Email"
                        inputType="text"
                        errorMessage="" 
                        successMessage=""
                    />
                    <InputBox 
                        title="Password"
                        inputType="password"
                        errorMessage="" 
                        successMessage=""
                    />
                    <div className="signIn__options">
                        <p>Don&apos;t have an account? <a>Sign Up</a></p>
                        <p><a>Forgotten Password?</a></p>
                    </div>
                    <div className="signIn__line"></div>
                    <input type="submit" value="Login" className="signIn__submit"/>
                </form>
            </div>

        </div>
    );

}

export default Login;
