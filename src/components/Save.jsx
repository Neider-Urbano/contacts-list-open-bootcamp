import React, { useState } from "react";
import PropTypes from "prop-types";
import State from "../models/estado.enum";

const initialState = {
  name: "",
  age: "",
  state: "select",
};

const Save = ({ data, onSetContactList, onSetFetch }) => {
  const [contact, setContact] = useState(initialState);

  const clickOnSubmit = (e) => {
    e.preventDefault();
    if (
      contact.name.length > 0 &&
      contact.age.length > 0 &&
      contact.state !== "select"
    ) {
      contact.id = Math.max(...data.map((x) => x.id)) + 1;
      const newContact = data;
      newContact.push(contact);
      onSetContactList(newContact);
      onSetFetch(true);
      setContact(initialState);
    } else {
      alert("error");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div className="container-crear">
      <h2>Crear nuevo contacto</h2>
      <form onSubmit={(e) => clickOnSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={contact.age}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>

        <div>
          <label>State</label>
          <select
            name="state"
            defaultValue={contact.select}
            onChange={(e) => {
              handleOnChange(e);
            }}
          >
            <option value="select">Select state</option>
            <option value={State.Conectado}>{State.Conectado}</option>
            <option value={State.Desconectado}>{State.Desconectado}</option>
          </select>
        </div>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

Save.propTypes = {
  contactList: PropTypes.array,
  onSetContactList: PropTypes.func,
  onSetFetch: PropTypes.func,
};
export default Save;
