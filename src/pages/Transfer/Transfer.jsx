import "./Transfer.scss";

const Transfer = ({ currencyFlag, currencyName, amount, rate, isActive }) => {
    <div 
        className={isActive?"transfer transfer__active" : "transfer"}
    >
        <img
            className="transfer__flag"
            src={currencyFlag}
        />
        <p
            className="transfer__currency"
        >
            {currencyName}
        </p>
        <p
            className="transfer__amount"
        >
            {amount}
        </p>
        {
            rate&&<p
                className="transfer__rate"
            >
                {rate}
            </p>
        }
        {/* Put button component here when we have a button element. */}
        {/* Button text/effect needs to be different depending on isActive */}
        {/* button class should be "transfer__object__button" for SCSS compatability. */}
    </div>
}

export default Transfer;