import "./Button.scss";

// we have designed all the styles for the project, you will need to call the classNaming for the specific style you need.

const Button = ({buttonText, handleClick, classNaming}) =>{
    return (
        <>
            <button className={classNaming} onClick={handleClick}>{buttonText}</button>
        </>
    );

}

export default Button;
