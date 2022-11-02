import "./ModalWindow.scss";
import cross from "../../assets/images/modal-cross.png";

const ModalWindow = ({title}) => {
    return(
        <div className="modal-background">
            <div className="modal">
                <h1>{title}</h1>
                <img className="modal-cross" src={cross} alt="modal cross"/>
                <hr/>
            </div>
        </div>
    )
}

export default ModalWindow;