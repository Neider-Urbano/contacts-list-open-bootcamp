import React from "react";
import State from "../models/estado.enum";
import PropTypes from "prop-types";

const Update = ({
  dataUpdate,
  onSetDataUpdate,
  updateContact,
  cancelUpdate,
}) => {
  const clickOnSubmit = (e) => {
    e.preventDefault();
    if (
      dataUpdate.name !== "" &&
      dataUpdate.age !== "" &&
      dataUpdate.state !== "select" &&
      dataUpdate.id > 0
    ) {
      updateContact();
    } else {
      alert("error");
      cancelUpdate();
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    onSetDataUpdate({ ...dataUpdate, [name]: value });
  };

  return (
    <div className="container-form-update">
      <h2>Actualizar usuario</h2>
      <form onSubmit={(e) => clickOnSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={dataUpdate.name}
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
            value={dataUpdate.age}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>

        <div>
          <label>State</label>
          <select
            name="state"
            value={dataUpdate.state}
            onChange={(e) => {
              handleOnChange(e);
            }}
          >
            <option value="select">Select state</option>
            <option value={State.Conectado}>{State.Conectado}</option>
            <option value={State.Desconectado}>{State.Desconectado}</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Update" />
          <input
            type="button"
            value="Cancel"
            onClick={() => {
              cancelUpdate();
            }}
          />
        </div>
      </form>
    </div>
  );
};

Update.propTypes = {
  dataUpdate: PropTypes.object,
  onSetDataUpdate: PropTypes.func,
  cancelUpdate: PropTypes.func,
};

export default Update;
