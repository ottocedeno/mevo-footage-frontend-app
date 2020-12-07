import React from "react";

const PageTitle = ({ children }) => {
  return <h1 className="text-4xl font-bold leading-tight">{children}</h1>;
};

const SubHeading = ({ children }) => {
  return <p className="mt-2 px-1">{children}</p>;
};

const PageHeader = ({ children }) => {
  return (
    <div className="text-white px-4 py-10 bg-mevo-light-grey text-mevo-blue flex justify-center">
      <div className="max-w-lg ">{children}</div>
    </div>
  );
};

PageHeader.Title = PageTitle;
PageHeader.SubHeading = SubHeading;

export default PageHeader;
