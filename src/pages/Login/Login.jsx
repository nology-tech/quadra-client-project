import "./Login.scss";
import hand from "../../assets/images/hello.svg";
import InputBox from "../../components/InputBox/InputBox";
import {useState, useEffect} from 'react';
import app from "../../firebase.js";

const Login = () => {

    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const [invalidEmail,setInvalidEmail] = useState();

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const validatEmail = () => {
        if (!emailRegex.test(email)) {
            setInvalidEmail("Please enter a valid email");
        } else {
            setInvalidEmail("");
        }
    }

    useEffect (() => {
        validatEmail();
    }, [email])

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
                errorMessage={invalidEmail} 
                successMessage=""
                onChange={handleEmail}
            />
            <InputBox 
                title="Password"
                inputType="password"
                errorMessage="" 
                successMessage=""
                onChange={handlePassword}
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
