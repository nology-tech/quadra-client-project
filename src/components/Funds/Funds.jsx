import "./Funds.scss";
import Button from '../Button/Button';

const Funds = ({amount}) => {
    return(
        <div className="funds">
            <h4 className="fund__title">Your Funds</h4>
            <p className="fund__amount">{amount}</p>
            <Button buttonText={"Manage"}/>
        </div>
    )
}

export default Funds;