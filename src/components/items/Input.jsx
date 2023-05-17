import React from "react";

const Input = ({ ...props }) => {
  return (
    <div className="input input--primary">
      <input type="text" {...props} />
    </div>
  );
};

export default Input;
