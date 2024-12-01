import React from "react";

export const ModalAction = ({ children, onClick }) => {
  return (
    <button className="modal-action" onClick={onClick}>
      {children}
    </button>
  );
};
