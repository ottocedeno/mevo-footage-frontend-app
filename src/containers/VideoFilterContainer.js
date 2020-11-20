import React from "react";
import { connect } from "react-redux";

const renderFilters = (optionsArray) => {
  const options = ["All", ...optionsArray];
  return options.map((option) => {
    return (
      <button
        className="px-5 bg-mevo-light-grey rounded-full py-1 text-sm mr-3 flex-shrink-0"
        key={option}
        value={option}
      >
        {option}
      </button>
    );
  });
};

const VideoFilterContainer = (props) => {
  return (
    <div className="pt-2">
      <h2 className="text-mevo-red font-bold text-center mt-3">CAMERA</h2>
      <div className="flex overflow-x-auto pl-4 items-baseline text-center mt-3">
        {renderFilters(props.cameras)}
      </div>

      <h2 className="text-mevo-red font-bold text-center mt-3">CATEGORY</h2>
      <div className="flex overflow-x-auto pl-4 items-baseline text-center mt-3">
        {renderFilters(props.categories)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cameras: state.cameras, categories: state.categories };
};

export default connect(mapStateToProps)(VideoFilterContainer);
