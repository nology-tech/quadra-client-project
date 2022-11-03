import "./Login.scss";
import hand from "../../assets/images/hello.svg";
import InputBox from "../../components/InputBox/InputBox";

const Login = () => {

    const handleSubmit = () => {

        alert("You submitted the form");

    }

    return (

        <form className="signIn" onSubmit={handleSubmit}>
            <p className="signIn__logo">Logo waiting for approval here</p>
            <div className="signIn__welcome">
                <p className="welcome__text">Welcome back!</p>
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
    );

}

export default Login;
