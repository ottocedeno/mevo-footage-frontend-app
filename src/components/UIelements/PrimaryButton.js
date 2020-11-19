import React from "react";

const PrimaryButton = ({ url, label }) => {
  return (
    <a
      href={url}
      className="bg-mevo-red text-white w-full py-3 rounded-full text-center block"
    >
      {label}
    </a>
  );
};

export default PrimaryButton;
