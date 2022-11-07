import "./Button.scss";

const Button = ({ buttonText, handleClick }) => {
  return (
    <>
      <button className="largeButton" onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
