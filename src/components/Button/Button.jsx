import "./Button.scss";

const Button = (props) =>{
    const {buttonText} = props;
    return (<>
    <button className="largeButton">{buttonText}</button>
    </>)

}

export default Button;