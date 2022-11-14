import "./ModalWindow.scss";
import cross from "../../assets/images/modal-cross.png";
import magnifyingGlass from "../../assets/images/searchIcon.png";
import BankContact from "../BankContact/BankContact";
import { useState } from "react";
import { useEffect } from "react";

const ModalWindow = ({
  title,
  toggleModal,
  contacts,
  pageFrom,
  onclick,
  modalVisible,
}) => {
  // console.log("this is contacts in modalWindow ", contacts);
  // console.log(modalVisible);
  const [inputName, setInputName] = useState("");
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    console.log("this is contacts on load", contacts);
    setFilterArray(...filterArray, contacts);
    console.log("this is modal visivle on load", modalVisible);
  }, []);

  // console.log(toggleModal);

  // console.log("value of inputName", inputName);
  const handleInput = (event) => {
    const cleanInput = event.target.value;

    // space cannot be first character

    if (cleanInput[0] === " ") {
      return setInputName("");
    }
    // cant space back to back
    if (/^[A-Za-z\s]+$/.test(cleanInput) === true) {
      return setInputName(cleanInput.toLowerCase().replace(/\s\s+/g, " "));
    }

    console.log("this is filter array in handleInput ", filterArray);

    // only input a-z
    return setInputName(cleanInput.toLowerCase());

    // setInputName(cleanInput.toLowerCase());
  };

  console.log(filterArray);

  // console.log("this is modal visivle", modalVisible);
  // console.log("this is contacts", contacts);
  // console.log("this is filter array", filterArray.length);

  const showArray = (arr) => {
    return arr
      .sort((a, b) => {
        if (a.contactName < b.contactName) {
          return -1;
        }
        if (a.contactName > b.contactName) {
          return 1;
        }
        return 0;
      })

      .map((contact) => {
        // eslint-disable-next-line no-debugger

        {
          return (
            <>
              <div
                className="contact-row-wrapper hvr-underline-from-left"
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
        }
      })
      .splice(0, 3);
  };

  const filterContacts = () => {
    setFilterArray(
      contacts.filter((contact) => {
        if (contact.contactName.toLowerCase().includes(inputName) === true) {
          console.log("SIUUUUUU", contact.contactName);
          return contact.contactName.toLowerCase();
        }
        return null;
      })
    );
  };
  useEffect(() => {
    filterContacts();
    // console.log("this is filter array ", filterArray);
  }, [inputName]);

  // console.log("this is filter array", test);

  ////////////////

  //   console.log(contacts);
  //   console.log("this is func ", onclick);
  return (
    <div className={`modal ${modalVisible ? `__active` : ""}`}>
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
              <div className="contact-row-wrapper">
                <div className="bank-contact">
                  <p className="match-background-color"> BE WHITE </p>
                  <p className="bank-contact__align">Name</p>
                  <p className="bank-contact__align" id="align">
                    Sort Code
                  </p>
                  <p className="bank-contact__align">Account Number</p>
                </div>
              </div>

              {
                filterArray.length === 0 &&
                /[A-Za-z\s]+$/.test(inputName) == false
                  ? showArray(contacts)
                  : showArray(filterArray)

                // showArray(contacts)
              }
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
