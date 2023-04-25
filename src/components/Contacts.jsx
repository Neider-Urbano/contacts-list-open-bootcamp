import React, { useState } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import ContactClass from "../models/contact.class";
import Update from "./Update";

const initialState = {
  name: "",
  age: "",
  state: "select",
};

const Contacts = ({ data, onSetContactList, onSetFetch }) => {
  const [dataUpdate, setDataUpdate] = useState(initialState);

  const deleteContactId = (id) => {
    const newContacts = data.filter((contact) => contact.id !== id);
    onSetContactList(newContacts);
    onSetFetch(true);
  };

  const getContactId = (id) => {
    const newContacts = data.filter((contact) => contact.id === id);
    setDataUpdate(newContacts[0]);
  };

  const updateContact = () => {
    const newContacts = data.map((contact) => {
      if (contact.id === dataUpdate.id) {
        contact.name = dataUpdate.name;
        contact.age = dataUpdate.age;
        contact.state = dataUpdate.state;
      }
      return contact;
    });
    onSetContactList(newContacts);
    setDataUpdate(initialState);
  };

  const cancelUpdate = () => {
    setDataUpdate(initialState);
  };

  return (
    <div className="container-lists">
      <div className="container-list">
        <h2>Lista de contactos</h2>
        <div className="container-lists-map">
          {data.length > 0 ? (
            data.map((contact, key) => {
              const contactClass = new ContactClass(
                contact.id,
                contact.name,
                contact.age,
                contact.state
              );
              return (
                <Contact
                  key={key}
                  data={contactClass}
                  deleteContactId={deleteContactId}
                  getContactId={getContactId}
                />
              );
            })
          ) : (
            <div className="container-card">
              No existen contactos registrados
            </div>
          )}
        </div>
      </div>
      <div className="container-update">
        <Update
          dataUpdate={dataUpdate}
          onSetDataUpdate={setDataUpdate}
          updateContact={updateContact}
          cancelUpdate={cancelUpdate}
        />
      </div>
    </div>
  );
};

Contacts.propTypes = {
  data: PropTypes.array,
  onSetContactList: PropTypes.func,
  onSetFetch: PropTypes.func,
};

export default Contacts;
