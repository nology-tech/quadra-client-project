import "./ModalWindow.scss";
import cross from "../../assets/images/modal-cross.png";
import BankContact from "../BankContact/BankContact";
import { useState } from "react";

const ModalWindow = ({ title, toggleModal, contacts, pageFrom, onclick }) => {
  const [inputName, setInputName] = useState("");
  console.log("value of inputName", inputName);
  const handleInput = (event) => {
    const cleanInput = event.target.value;
    console.log(cleanInput);

    setInputName(cleanInput.toLowerCase());
  };

  ////////////////

  //   console.log(contacts);
  //   console.log("this is func ", onclick);
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
            <form>
              <label>
                Search here
                <input
                  placeholder={"search here"}
                  onInput={handleInput}
                  value={inputName}
                ></input>
              </label>
            </form>
            {contacts.map((contact) => {
              // console.log("this is contacts", contacts);
              //   console.log("this is inside map", contact.contactName);
              if (inputName == "") {
                return (
                  <>
                    <div
                      className="contact-row-wrapper"
                      onClick={() => {
                        onclick(contact);
                        toggleModal();
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
              } else if (
                contact.contactName.toLowerCase().includes(inputName)
              ) {
                return (
                  <>
                    <div
                      className="contact-row-wrapper"
                      onClick={() => {
                        onclick(contact);
                        toggleModal();
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
              } else {
                return null;
              }
            })}
          </div>
        ) : null}

        <hr />
      </div>
    </div>
  );
};

export default ModalWindow;
