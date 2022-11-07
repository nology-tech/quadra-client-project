import "./Feature.scss";
import creditCardImage from "../../assets/images/credit-card.png";


const Feature = ({title,desc}) =>{
    return(
        <div className="feature">
            <img className="feature__img" src={creditCardImage} alt="Credit Card Icon" />
            <h3 className="feature__title">{title}</h3>
            <p className="feature__desc">{desc}</p>
        </div>
    )
}

export default Feature