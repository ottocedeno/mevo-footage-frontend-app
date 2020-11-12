import React from "react";

const FormRadioInput = ({ name, value }) => {
  return (
    <label>
      <input type="radio" name={name} value={value} />
      <span className="ml-2">{value}</span>
    </label>
  );
};

export default FormRadioInput;
