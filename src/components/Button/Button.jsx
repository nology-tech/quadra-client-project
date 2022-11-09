import "./Button.scss";

// we have designed all the styles for the project, you will need to call the buttonClass for the specific style you need.

const Button = ({ buttonText, handleClick, buttonClass }) => {
  return (
    <>
      <button className={buttonClass} onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
