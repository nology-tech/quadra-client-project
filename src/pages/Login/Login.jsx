import "./Login.scss";
import hand from "../../assets/images/hello.svg";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import app from "../../firebase.js";
import {
    getAuth,
    signInWithEmailAndPassword
  } from "firebase/auth";

const Login = ({saveUser}) => {

    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const [invalidEmail,setInvalidEmail] = useState();
    const [invalidPassword, setInvalidPassword] = useState()
    const navigate = useNavigate();

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const auth = getAuth(app);

    useEffect (() => {
        validatEmail();
    }, [email])

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

    const handleLogin = async () => {
        const userData = await loginAuth();
        if(userData != undefined) {
            saveUser(userData)
            setInvalidPassword("");
            setInvalidEmail("");
            navigate("/wallet");
        }
    }


    const loginAuth = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            return response.user
        } catch (error) {
            const errorCode = error.code;
                if(errorCode == "auth/wrong-password") {
                    setInvalidPassword("Incorrect password.Please try again")
                } else {
                    setInvalidEmail("Incorrect email. Please try again");
                }
            }
        }

    return (

        <div className="signIn">
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
                errorMessage={invalidPassword} 
                successMessage=""
                onChange={handlePassword}
            />
            <div className="signIn__options">
                <p>Don&apos;t have an account? <a>Sign Up</a></p>
                <p><a>Forgotten Password?</a></p>
            </div>
            <div className="signIn__line"></div>
            <Button className="signIn__submit" buttonText={"Login"} handleClick={handleLogin} />
        </div>
    );

}

export default Login;
