import React from "react";

const FormTextInput = ({ name, placeholder, value, handleFormInputChange }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleFormInputChange}
      className="focus:shadow-md focus:border-mevo-blue border border-mevo-dark-grey rounded-full outline-none px-4 py-3 w-full mb-8 text-mevo-blue"
    />
  );
};

export default FormTextInput;
