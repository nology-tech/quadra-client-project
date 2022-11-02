import "./Funds.scss";
import Button from '../Button/Button';

const Funds = ({amount, isManage}) => {
    return(
        <div className="funds">
            <h4 className="funds__title">Your Funds:</h4>
            <p className="funds__amount">£{amount}</p>
            {isManage && <Button buttonText={"Manage"}/>}
        </div>
    )
}

export default Funds;