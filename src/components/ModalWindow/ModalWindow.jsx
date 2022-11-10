import "./ModalWindow.scss";
import cross from "../../assets/images/modal-cross.png";
import BankContact from "../BankContact/BankContact";

const ModalWindow = ({ title, toggleModal, contacts, pageFrom, onclick }) => {
  ////////////////

  console.log(contacts);
  console.log("this is func ", onclick);
  return (
    <div className="modal">
      <div className="modal__content">
        <h1 className="modal__heading">{title}</h1>
        <img
          className="modal__image"
          src={cross}
          alt="modal cross"
          onClick={toggleModal}
        />
        {pageFrom === "transferSend" ? (
          <div className="contact-row">
            {contacts.map((contact) => {
              // console.log("this is contacts", contacts);
              //   console.log("this is inside map", contact.contactName);

              return (
                <>
                  <div
                    className="contact-row-wrapper"
                    onClick={() => {
                      onclick(contact);
                    }}
                  >
                    <BankContact
                      key={contact.id}
                      userName={contact.contactName}
                      isTransfer={true}
                      sortCode={contact.sortCode}
                      accNum={contact.accountNumber}
                    />
                  </div>
                </>
              );
            })}
          </div>
        ) : null}

        <hr />
      </div>
    </div>
  );
};

export default ModalWindow;
