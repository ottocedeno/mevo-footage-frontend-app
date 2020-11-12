import React from "react";

const FormTextInput = ({ name, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="border border-black rounded-full outline-none px-4 py-3 w-full mb-8"
    />
  );
};

export default FormTextInput;
