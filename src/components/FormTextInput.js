import React from "react";

const FormTextInput = ({ name, placeholder, value, handleTextInputChange }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleTextInputChange}
      className="focus:shadow-lg focus:border-black border focus:opacity-100 border-gray-500 rounded-full outline-none px-4 py-3 w-full mb-8"
    />
  );
};

export default FormTextInput;
