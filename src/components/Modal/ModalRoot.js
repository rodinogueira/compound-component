import React from "react";
import "./Modal.css";

export const ModalRoot = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return <div className="modal-root">{children}</div>;
};
