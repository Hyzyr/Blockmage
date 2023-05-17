import React from "react";

const Input = ({ type, ...props }) => {
  if (type === "textarea")
    return (
      <div className="input input--primary">
        <textarea type={type} {...props} />
      </div>
    );
  return (
    <div className="input input--primary">
      <input type={type} {...props} />
    </div>
  );
};

export default Input;
