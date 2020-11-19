import React from "react";
import FormRadioInput from "./FormRadioInput";

const FormRadioGroup = ({
  title,
  options,
  name,
  current,
  handleFormInputChange,
}) => {
  return (
    <div>
      <p className="text-center uppercase font-bold text-sm">{title}</p>
      <div className="flex flex-col mt-2 mb-4 pl-4">
        {options.map((option, id) => {
          return (
            <FormRadioInput
              key={id}
              name={name}
              value={option}
              current={current}
              handleFormInputChange={handleFormInputChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FormRadioGroup;
