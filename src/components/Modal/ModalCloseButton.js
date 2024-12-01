import React from "react";

export const ModalCloseButton = ({ onClose }) => {
  return (
    <button className="modal-close-button" onClick={onClose}>
      &times;
    </button>
  );
};
