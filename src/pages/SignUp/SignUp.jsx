import "./SignUp.scss"
import Button from "../../components/Button/Button";
import logo from "../../assets/images/logo.png"

const SignUp = ({login}) => {

    
    return(

        <div className="background" >
        <div className="signUp">
            <div className="signUp__company">
            <img className="signUp__company signUp__company--logo" src={logo} ></img>
            <p className="signUp__company signUp__company--name">Synergy</p>
            </div>

            <h1 className="signUp__header" >Create an account</h1>
            <p className="signUp__headerText" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

        <div className="signUp__input">
            {/* Input box */}
            <p>Name</p>
            <input type="text" />
            
            {/* Input box */}
            <p>Password</p>
            <input type="text" />

            {/* Input box */}
            <p>Confirm Password</p>
            <input type="text" />

        </div>    
        

            <div className="signUp__text">
            <p className="signUp__text signUp__text--account">Already have an account?</p>
            <a href={login} className="signUp__text signUp__text--login">Login</a>
            </div>

            <div className="signUp__continue" >
            <Button buttonText="Continue >"/>
            </div>



        </div>
        </div>
 
    )
}

export default SignUp;