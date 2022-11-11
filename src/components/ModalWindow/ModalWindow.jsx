import "./ModalWindow.scss";
import cross from "../../assets/images/modal-cross.png";
import magnifyingGlass from "../../assets/images/searchIcon.png";
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

  let counter = 0;

  ////////////////

  //   console.log(contacts);
  //   console.log("this is func ", onclick);
  return (
    <div className="modal">
      <div className="modal__content">
        {pageFrom == "transferSend" ? (
          <>
            <div className="optional_modal_top-row">
              <h1 className="modal__heading">{title}</h1>
              <img
                className="modal__condtional_image"
                src={cross}
                alt="modal cross"
                onClick={toggleModal}
              />
            </div>

            <div className="contact-row">
              <form className="optional-form-container">
                <p>Search here</p>

                <div className="optional-search-container">
                  <img src={magnifyingGlass} alt="search glass" />

                  <input
                    placeholder={"Search..."}
                    onInput={handleInput}
                    value={inputName}
                  ></input>
                </div>
              </form>

              {contacts.map((contact) => {
                // console.log("this is contacts", contacts);
                //   console.log("this is inside map", contact.contactName);
                // return (
                //   <>
                //     <div></div>
                //   </>
                // );
                if (counter === 0) {
                  counter++;
                  return (
                    <div key={counter} className="contact-row-wrapper">
                      <div className="bank-contact">
                        <p className="match-background-color"> BE WHITE </p>
                        <p className="bank-contact__align">Name</p>
                        <p className="bank-contact__align" id="align">
                          Sort Code
                        </p>
                        <p className="bank-contact__align">Account Number</p>
                      </div>
                    </div>
                  );
                }

                if (inputName == "") {
                  return (
                    <div key={counter}>
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
                    </div>
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
          </>
        ) : (
          <>
            <h1 className="modal__heading">{title}</h1>
            <img
              className="modal__image"
              src={cross}
              alt="modal cross"
              onClick={toggleModal}
            />
          </>
        )}

        <hr />
      </div>
    </div>
  );
};

export default ModalWindow;
