import React from "react";

const FullViewImage = ({ data }) => {
  return (
    <div className="tech my-md-5 mb-5">
      <img src={data} className="w-100 px-md-5 mb-5 mb-md-0" />
    </div>
  );
};

export default FullViewImage;
