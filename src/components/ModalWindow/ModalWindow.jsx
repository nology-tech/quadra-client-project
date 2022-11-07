import "./ModalWindow.scss";
import cross from "../../assets/images/modal-cross.png";

const ModalWindow = ({title, toggleModal}) => {

    return(
        <div className="modal">
            <div className="modal__content">
                <h1>{title}</h1>
                <img className="modal__image" src={cross} alt="modal cross" onClick={toggleModal} />
                <hr/>
            </div>
        </div>
    )
}

export default ModalWindow;
