import "./Transfer.scss";

const Transfer = ({ currencyFlag, currencyName, amount, rate, isActive }) => {
    <div 
        className={isActive?"transfer__object transfer__object--active" : "transfer__object"}
    >
        <img
            className="transfer__object--flag"
            src={currencyFlag}
        />
        <p
            className="transfer__object--currency"
        >
            {currencyName}
        </p>
        <p
            className="transfer__object--amount"
        >
            {amount}
        </p>
        {
            rate&&<p
                    className="transfer__object--rate"
                >
                    {rate}
                </p>
        }
        {/* Put button component here when we have a button element. */}
        {/* Button text/effect needs to be different depending on isActive */}
        {/* button class should be "transfer__object--button" for SCSS compatability. */}
    </div>
}

export default Transfer;