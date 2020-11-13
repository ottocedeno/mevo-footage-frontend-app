import React from "react";

const FormCheckboxInput = ({ name, current, label, handleCheck }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={current}
        value={current}
        onChange={handleCheck}
      />
      <span className="pl-2 text-sm">{label}</span>
    </label>
  );
};

export default FormCheckboxInput;
