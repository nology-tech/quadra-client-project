import "./TransferSend.scss";

import Button from "../../components/Button/Button";
import Plus from "../../assets/images/plus.png";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

import { useState, useEffect } from "react";
import { getUserContacts } from "../../utils/apiUtils";

const TransferSend = ({
  user = "Sam Lastname",
  accNum = "123",
  sortCode = "000",
  total = "£100.00",
  fundsRem = "£1",
}) => {
  /*
    { name, accNum, code, total, fundsRem }
  */
  const buttonPress = () => {
    alert("button has been pressed");
  };
  // console.log(user);

  const [modalVisible, setModalVisible] = useState(false);
  const [allContacts, setAllContacts] = useState([]);
  const [individualContact, setIndividualContact] = useState([]);

  const toggleModal = () => {
    // console.log("modal toggle has been pressed");
    setModalVisible(!modalVisible);
  };

  const getData = async () => {
    const contacts = await getUserContacts();
    await setAllContacts(contacts);
    // console.log("this is all contacts 1", contacts);

    // console.log("this is all contacts", allContacts);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, modalVisible);

  const getContactData = (contact) => {
    return setIndividualContact(contact);

    // return console.log(
    //   "get contact data has been pressed",
    //   individualContact.contactName
    // );
  };

  // console.log("ignore", getContactData);

  // console.log("this is length ", individualContact.length);
  console.log("page load all contacts", allContacts);
  return (
    <>
      <ModalWindow
        key={"modal-window"}
        toggleModal={toggleModal}
        title="Choose Recipient"
        contacts={allContacts}
        pageFrom="transferSend"
        onclick={getContactData}
        modalVisible={modalVisible}
      ></ModalWindow>
      <div
        style={
          modalVisible
            ? {
                opacity: 0.2,
                backgroundColor: "hsla(0, 0%, 0%, 0.6)",
                border: "2px solid black",
                height: "100vh",
              }
            : null
        }
      >
        <div className="info">
          <h1 className="info__transfer"> Transfer </h1>
          <h1 className="info__heading"> View Latest Rates </h1>
          <p className="info__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
            inventore deserunt id? Rem minima dolorem asperiores perferendis sed
            aspernatur. Dolorem nostrum voluptatibus dolore odit provident
            minima reiciendis dignissimos iste.
          </p>
        </div>

        <div className="transferForm">
          <h1 className="transferForm__head">Send From</h1>
          <div className="transferForm__inner">
            <h1 className="transferForm__user">
              {Object.keys(individualContact).length > 0
                ? individualContact.contactName
                : user}
            </h1>
            <div className="transferForm__infoWrapper">
              <h2 className="transferForm__infoName">Account Number</h2>
              <p className="transferForm__infoNum">
                {Object.keys(individualContact).length > 0
                  ? individualContact.accountNumber
                  : accNum}
              </p>
            </div>
            <div className="transferForm__infoWrapper">
              <h2 className="transferForm__infoName">Sort Code</h2>
              <p className="transferForm__infoNum">
                {Object.keys(individualContact).length > 0
                  ? individualContact.sortCode
                  : sortCode}
              </p>
            </div>
            <div className="transferForm__greyLine"></div>
            <div className="transferForm__totalWrapper">
              <h2 className="transferForm__total">Total</h2>
              <p className="transferForm__total transferForm__total--amount">
                {total}
              </p>
            </div>
            <div className="transferForm__remainderWrapper">
              <h2 className="transferForm__remainder">Funds Remaining</h2>
              <p className="transferForm__remainder transferForm__remainder--amount">
                {fundsRem}
              </p>
            </div>
          </div>
          <div className="transferForm__sendWrapper">
            <h1 className="transferForm__head">To</h1>
            <div className="transferForm__buttons">
              <div className="transferForm__select" onClick={toggleModal}>
                <Button
                  buttonText="Select Recipient"
                  onClick={toggleModal}
                  buttonClass="largeButton"
                />
              </div>
              <div className="transferForm__new" onClick={buttonPress}>
                <img src={Plus} alt="plus" />
                <p>Pay someone new</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferSend;
