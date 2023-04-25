import React from "react";
import PropTypes from "prop-types";
import ContactClass from "../models/contact.class";

const Contact = ({ data, deleteContactId, getContactId }) => {
  return (
    <div className="container-card">
      <div className="container-information">
        <h2>{data.name}</h2>
        <p>{data.age} años</p>
        <p>{data.state}</p>
      </div>
      <div className="container-crud">
        <p
          onClick={() => {
            deleteContactId(data.id);
          }}
        >
          Delete
        </p>
        <p
          onClick={() => {
            getContactId(data.id);
          }}
        >
          Edit
        </p>
      </div>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.instanceOf(ContactClass),
  deleteContactId: PropTypes.func,
  getContactId: PropTypes.func,
};

export default Contact;
