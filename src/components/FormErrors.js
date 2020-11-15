import React from "react";

const FormErrors = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <div className="border border-mevo-red bg-red-200 text-mevo-red text-sm rounded my-6 py-3 px-4">
        <p className="font-bold uppercase mb-1 text-center">
          Please update the following
        </p>
        <ul className="ml-4">
          {errors.map((error, id) => {
            return (
              <li key={id} className="list-disc">
                {error}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default FormErrors;
