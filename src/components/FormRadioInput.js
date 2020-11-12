import React from "react";

const FormRadioInput = ({
  name,
  value,
  currentModel,
  handleFormInputChange,
}) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={currentModel === value}
        onChange={handleFormInputChange}
      />
      <span className="ml-2">{value}</span>
    </label>
  );
};

export default FormRadioInput;
